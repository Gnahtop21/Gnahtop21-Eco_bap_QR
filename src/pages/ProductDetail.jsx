import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../cssPages/ProductDetail.css';
import { products } from '../db';

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [isVideoVisible, setIsVideoVisible] = useState(false);

    useEffect(() => {
        const found = products.find(p => p.id === parseInt(id));
        setProduct(found);
        window.scrollTo(0, 0);
        setIsVideoVisible(false);
    }, [id]);

    if (!product) return <div>Không tìm thấy sản phẩm</div>;

    const recommendedProducts = products
        .filter(item => item.id !== parseInt(id))
        .slice(0, 6);

    return (
        <div className="main-product-wrapper">
            <div className="product-layout-container">
                <div className="product-image-section">
                    <div className="product-image-container">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-main-image"
                        />

                        {/* Nút xem video AI */}
                        {product.video && (
                            <button
                                className="view-video-btn"
                                onClick={() => setIsVideoVisible(!isVideoVisible)}
                            >
                                <FontAwesomeIcon icon={isVideoVisible ? faTimes : faPlay} />
                                {isVideoVisible ? 'Ẩn video AI' : 'Xem video AI'}
                            </button>
                        )}
                    </div>

                    {/* Video AI overlay */}
                    {product.video && isVideoVisible && (
                        <div className="video-overlay">
                            <div className="video-container">
                                <div className="video-header">
                                    <h3 className="video-title">Video AI Demo - {product.name}</h3>
                                    <button
                                        className="close-video-btn"
                                        onClick={() => setIsVideoVisible(false)}
                                    >
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                                <div className="video-wrapper">
                                    <video
                                        controls
                                        className="product-video"
                                        autoPlay
                                        playsInline
                                    >
                                        <source src={product.video} type="video/mp4" />
                                        Trình duyệt không hỗ trợ video.
                                    </video>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="product-info-section">
                    <div className="product-heading">
                        <h1 className="product-title">{product.name}</h1>
                        <p className="product-sku">Mã hàng: {product.id}</p>
                    </div>

                    <div className="product-pricing">
                        <span className="discount-badge">-30%</span>
                        <span className="current-price">{product.price.toLocaleString()} VNĐ</span>
                        <span className="original-price">{(product.price * 1.3).toLocaleString()} VNĐ</span>
                    </div>

                    <div className="product-details">
                        <h3 className="details-title">THÔNG TIN CHUNG VỀ SẢN PHẨM</h3>
                        <ul className="details-list">
                            <li className="details-item">• Làm từ vỏ bắp tái chế – lựa chọn xanh cho cuộc sống hiện đại.</li>
                            <li className="details-item">• Chất liệu tự nhiên, xử lý thủ công tinh tế.</li>
                            <li className="details-item">• Thiết kế thân thiện môi trường, phù hợp túi tiền.</li>
                            <li className="details-item">• Màu sắc mộc mạc, gần gũi với thiên nhiên.</li>
                        </ul>
                    </div>

                    <div className="product-care">
                        <h3 className="details-title">CÁCH BẢO QUẢN</h3>
                        <ul className="details-list">
                            <li className="details-item">• Tránh nước và môi trường ẩm.</li>
                            <li className="details-item">• Lau nhẹ khi bám bụi, bảo quản nơi khô thoáng.</li>
                            <li className="details-item">• Phơi nắng nhẹ nếu bị mềm.</li>
                        </ul>
                    </div>

                    <div className="product-buttons">
                        <button className="back-to-shop-btn" onClick={() => navigate('/shop')}>
                            <FontAwesomeIcon icon={faArrowLeft} /> QUAY LẠI SHOP
                        </button>
                    </div>
                </div>
            </div>

            {/* Sản phẩm đề xuất */}
            <div className="recommended-products-section">
                <h2 className="recommended-title">SẢN PHẨM ĐỀ XUẤT</h2>
                <div className="recommended-products-grid">
                    {recommendedProducts.map(item => (
                        <div
                            key={item.id}
                            className="recommended-product-card"
                            onClick={() => navigate(`/product/${item.id}`)}
                        >
                            <div className="recommended-product-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="recommended-product-info">
                                <h3 className="recommended-product-name">{item.name}</h3>
                                <div className="recommended-product-price">
                                    <span className="recommended-current-price">
                                        {item.price.toLocaleString()} VNĐ
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;