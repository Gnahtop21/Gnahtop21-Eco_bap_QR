import React, { useEffect } from 'react';
import '../cssPages/Footer.css';
import { FaFacebook, FaInstagram, FaTiktok, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../img/logoBalabin.png';

function Footer() {
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.preny.ai/embed-global.js";
        script.async = true;
        script.defer = true;
        script.setAttribute("data-button-style", "width:200px;height:200px");
        script.setAttribute("data-preny-bot-id", "68679b7b8ecf08f0b1121ab6"); // ✅ ID mới

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer" role="contentinfo" aria-label="Thông tin liên hệ và giới thiệu về Eco Bắp">
            <div className="footer-content">
                <div className="footer-section about-section">
                    <h2>Về Balabin</h2>
                    <p>Tiền thân là Eco Bắp chúng tôi tự hào cung cấp các sản phẩm thân thiện với môi trường từ nguyên liệu bắp tự nhiên, chất lượng cao với giá cả hợp lý. Chúng tôi cam kết mang đến những giải pháp bền vững cho cuộc sống hàng ngày.</p>
                    <div className="footer-logo">
                        <img src={logo} alt="logo" className='logo' width="120" height="60" />
                    </div>
                </div>

                <div className="footer-section contact-section">
                    <h2>Liên Hệ</h2>
                    <ul className="contact-info">
                        <li>
                            <FaMapMarkerAlt className="contact-icon" />
                            <address>Đại học FPT, P. An Bình, Q.Ninh Kiều, TP. Cần Thơ</address>
                        </li>
                        <li>
                            <FaPhone className="contact-icon" />
                            <a href="tel:+84964179329">(84+) 964.179.329</a>
                        </li>
                        <li>
                            <FaEnvelope className="contact-icon" />
                            <a href="mailto:balabin0905@gmail.com">balabin0905@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section hours-section">
                    <h2>Thời Gian Hoạt Động</h2>
                    <ul className="operation-hours">
                        <li>
                            <FaClock className="hours-icon" />
                            <span>Giờ làm việc: 8:00 - 21:00</span>
                        </li>
                        <li>
                            <span>Hoạt động: Thứ 2 - Chủ nhật</span>
                        </li>
                        <li>
                            <span>Hỗ trợ khách hàng 24/7</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-section links-section">
                    <h2>Liên Kết</h2>
                    <nav>
                        <ul className="quick-links">
                            <li><Link to="/" onClick={scrollToTop}>Trang chủ</Link></li>
                            <li><Link to="/shop" onClick={scrollToTop}>Sản phẩm</Link></li>
                            <li><Link to="/news" onClick={scrollToTop}>Tin tức</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="footer-section social-section">
                    <h2>Theo Dõi Chúng Tôi</h2>
                    <div className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61568821003334" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="social-icon" />
                            <span>Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/ecobap" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                            <span>Instagram</span>
                        </a>
                        <a href="https://www.tiktok.com/@eco4.bap" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="social-icon" />
                            <span>TikTok</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    &copy; {currentYear} Balabin - Khơi Nguồn Sáng Tạo
                </div>
                <div className="legal-links">
                    <Link to="/privacy-policy" onClick={scrollToTop}>Chính sách bảo mật</Link>
                    <Link to="/terms-of-service" onClick={scrollToTop}>Điều khoản dịch vụ</Link>
                    <Link to="/shipping-policy" onClick={scrollToTop}>Chính sách vận chuyển</Link>
                </div>
            </div>

            <div className="footer-badges">
                <div className="payment-methods">
                    <span>Phương thức thanh toán:</span>
                    <div className="payment-logos">
                        <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-Vietcombank.png" alt="Vietcombank" width="50" height="30" />
                        <img src="https://static.wixstatic.com/media/9d8ed5_0581c29a11f546b98a50fac0b6e24a7f~mv2.jpg" alt="BIDV" width="50" height="30" />
                        <img src="https://ruybangphuonghoang.com/wp-content/uploads/2024/10/logo-agribank-scaled.jpg" alt="Agribank" width="50" height="30" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Techcombank_logo.png" alt="Techcombank" width="50" height="30" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Logo_MB_new.png/1200px-Logo_MB_new.png" alt="MB Bank" width="50" height="30" />
                        <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="MoMo" width="50" height="30" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/3072px-Former_Visa_%28company%29_logo.svg.png" alt="Visa" width="50" height="30" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" width="50" height="30" />
                    </div>
                </div>
                <div className="certifications">
                    <span>Chứng nhận:</span>
                    <img src="https://file.hstatic.net/200000423303/article/nn_huuco_8ad18ec91a174544837c5d06217ee34a_grande.jpg" alt="Chứng nhận chất lượng" width="100" height="30" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
