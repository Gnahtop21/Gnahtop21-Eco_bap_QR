import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FaCalendarAlt, FaFacebook, FaShoppingCart } from 'react-icons/fa';
import News1 from '../img/BoSuuTam.jpg';
import News2 from '../img/SocTrangEvent.jpg';
import News3 from '../img/business.jpg';
import News4 from '../img/THTPCT.jpg';
import News5 from '../img/nhaCoBinhThuy.jpg';
import News7 from '../img/startupWheel.png';
import News6 from '../img/BaoNLD.png';
import News8 from '../img/BaoThanhNien.png';
import News9 from '../img/AnhNhom.jpg';
import NewsLazada from '../img/lazada.jpg';
import '../cssPages/News.css';

function News() {
    const newsItems = [
        {
            id: 10,
            title: "Truyền Hình Quốc Gia VTV3 - Sinh viên làm đồ thủ công mỹ nghệ từ vỏ bắp",
            category: "Sự kiện nổi bật",
            date: "02/08/2025",
            summary: "Balabin vừa được Đài Truyền hình Quốc gia Việt Nam – Chương trình Cafe Sáng với VTV3 mời chia sẻ về dự án tại Hà Nội.",
            content: "Vào sáng ngày 02/08/2025, dự án của Nhà Balabin vinh dự được Đài Truyền hình Quốc gia Việt Nam – Chương trình Cafe Sáng với VTV3 lựa chọn ghi hình và đưa tin. Việc được xuất hiện trên sóng truyền hình quốc gia không chỉ là một cột mốc đáng tự hào mà còn là minh chứng rõ ràng cho tính sáng tạo, giá trị xã hội và độ tin cậy của dự án. Sự quan tâm từ một kênh truyền thông uy tín như VTV3 đã góp phần lan tỏa mạnh mẽ thông điệp bảo vệ môi trường và gìn giữ bản sắc văn hóa thông qua các sản phẩm thủ công từ vỏ bắp do sinh viên thực hiện.",
            image: News9,
            facebookLink: "https://www.facebook.com/share/v/19jBbqB9Fe/"
        }
        ,
        {
            id: 8,
            title: "Balabin tự hào đạt Top 10 - Startup Wheel 2025",
            category: "Sự kiện nổi bật",
            date: "06/07/2025",
            summary: "Balabin tự hào khi lọt vào Top 10 Startup Wheel 2025 – một trong những đấu trường khởi nghiệp uy tín hàng đầu khu vực Đông Nam Á, khẳng định tiềm năng của những sản phẩm thân thiện với môi trường trên thị trường hiện đại.",
            content: "Vào ngày 27/06/2025, Nhà Balabin tự hào khi lọt vào Top 10 Startup Wheel 2025 – một trong những đấu trường khởi nghiệp uy tín hàng đầu khu vực Đông Nam Á, khẳng định tiềm năng của những sản phẩm thân thiện với môi trường trên thị trường hiện đại.",
            image: News7,
            alt: "Balabin đứng vị trí Top 10 Startup Wheel 2025 – khẳng định dấu ấn khởi nghiệp xanh trên sóng truyền hình Cần Thơ.",
            facebookLink: "https://www.facebook.com/share/p/1LumMGbBg2/"
        }, {
            id: 9,
            title: "Báo Thanh Niên - Sinh viên làm đồ thủ công mỹ nghệ từ vỏ bắp",
            category: "Sự kiện nổi bật",
            date: "25/07/2025",
            summary: "Balabin vừa được báo Thanh Niên đưa tin về dự án cho thấy mực độ tin cậy và uy tín của dự án.",
            content: "Vào ngày 25/07/2025, Nhà Balabin tự hào khi được Báo Thanh Niên đưa tin về dự án, cho thấy độ tin cậy và uy tín của nhóm",
            image: News8,
            content: "Vào ngày 25/07/2025, Nhà Balabin tự hào khi được Báo Thanh Niên đưa tin về dự án, cho thấy độ tin cậy và uy tín của nhóm",
            facebookLink: "https://www.facebook.com/share/p/1AuznmrhP7/"
        },
        {
            id: 7,
            title: "Đại học FPT đăng lại - Báo Người Lao Động đưa tin về nhóm Balabin",
            category: "Truyền thông",
            date: "27/06/2025",
            summary: "Báo Người Lao Động đưa tin - Từ nguyên liệu thô sơ, họ đã biến vỏ bắp thành những sản phẩm độc đáo, góp phần giảm thiểu rác thải và bảo vệ môi trường",
            content: "Vào ngày 27/06/2025, Báo Người Lao Động đưa tin - Từ nguyên liệu thô sơ, họ đã biến vỏ bắp thành những sản phẩm độc đáo, góp phần giảm thiểu rác thải và bảo vệ môi trường",
            image: News6,
            alt: "Báo Người Lao Động đưa tin về Balabin",
            facebookLink: "https://www.facebook.com/share/p/1Ev4VGnzMW/"
        },
        {
            id: 6,
            title: "Nhà Balabin lên Sóng Truyền Hình Thành Phố Cần Thơ",
            category: "Truyền thông",
            date: "15/06/2025",
            summary: "Nhà Balabin xuất hiện trên sóng truyền hình Cần Thơ cùng nhóm Art House, lan tỏa thông điệp sống xanh và sáng tạo.",
            content: "Trong chương trình truyền hình đặc biệt tại TP. Cần Thơ, Nhà Balabin đã vinh dự xuất hiện cùng nhóm Art House để chia sẻ hành trình sáng tạo sản phẩm thủ công từ vỏ Balabin. Đây là bước tiến quan trọng trong việc lan tỏa giá trị văn hóa bản địa, nâng cao nhận thức cộng đồng về tiêu dùng bền vững và khẳng định vị thế của sản phẩm thân thiện môi trường trên thị trường.",
            image: News4,
            alt: "Nhà Balabin lên sóng truyền hình Cần Thơ",
            facebookLink: "https://www.facebook.com/share/v/1M6HRhuRu1/"
        },
        {
            id: 5,
            title: "Nhà Balabin Chính Thức Có Mặt Trên Sàn Lazada🛒",
            category: "Kênh bán hàng",
            date: "17/03/2025",
            summary: "Nhà Balabin mở rộng kênh phân phối với cửa hàng chính thức trên sàn thương mại điện tử Lazada.",
            content: "Từ hôm nay, Nhà Balabin chính thức có mặt trên sàn thương mại điện tử Lazada, mang đến trải nghiệm mua sắm tiện lợi cho khách hàng. Đây là bước đi quan trọng trong chiến lược mở rộng kênh phân phối online của chúng tôi. Quý khách có thể dễ dàng tìm kiếm và đặt hàng các sản phẩm chính hãng từ Nhà Balabin trực tiếp trên ứng dụng hoặc website của Lazada.",
            image: NewsLazada,
            alt: "Nhà Balabin chính thức có mặt trên Lazada",
            facebookLink: "https://www.facebook.com/share/lazada-launch/",
            lazadaLink: "https://www.lazada.vn/shop/eco-bap"
        }, {
            id: 4,
            title: "Ghé thăm Balabin tại Nhà cổ Bình Thủy, Cần Thơ",
            category: "Kênh bán hàng",
            date: "27/04/2025",
            summary: "Ghé thăm gian hàng Nhà Balabin tại Nhà cổ Bình Thủy – nơi hòa quyện giữa không gian văn hóa di sản và tinh thần sáng tạo bền vững.",
            content: "Tọa lạc trong khuôn viên Nhà cổ Bình Thủy, gian hàng của Nhà Balabin không chỉ là nơi trưng bày các sản phẩm thủ công thân thiện môi trường mà còn mang đến trải nghiệm văn hóa độc đáo. Du khách có dịp tìm hiểu quy trình làm giấy từ vỏ Balabin, thưởng lãm các sản phẩm mỹ nghệ tinh xảo và cảm nhận hơi thở xanh len lỏi trong từng chi tiết.",
            image: News5,
            alt: "Nhà cổ Bình Thủy",
            facebookLink: "https://www.facebook.com/share/p/1BQtDGofJ9/",
        },
        {
            id: 3,
            title: " Balabin ra Mắt Bộ Sưu Tập Độc Đáo",
            category: "Bộ sưu tập",
            date: "17/03/2024",
            summary: "Khám phá bộ sưu tập mới với những thiết kế tinh tế, sáng tạo từ nguyên liệu bền vững.",
            content: "Chúng tôi hân hạnh giới thiệu bộ sưu tập thủ công độc đáo, kết hợp giữa nghệ thuật truyền thống và xu hướng hiện đại. Mỗi sản phẩm không chỉ mang giá trị thẩm mỹ mà còn hướng tới sự bền vững, thân thiện với môi trường.",
            image: News1,
            alt: "Ra mắt bộ sưu tập thủ công độc đáo",
            facebookLink: "https://www.facebook.com/share/p/1HGSLuCQtg/"

        },
        {
            id: 2,
            title: "Sự kiện nâng cao nhận thức về môi trường tại Sóc Trăng",
            category: "Sự kiện",
            date: "09/03/2025",
            summary: "Chúng tôi tổ chức sự kiện nâng cao nhận thức về bảo vệ môi trường tại Sóc Trăng, thu hút sự tham gia của cộng đồng và doanh nghiệp địa phương.",
            content: "Sự kiện nâng cao nhận thức về bảo vệ môi trường tại Sóc Trăng đã thu hút đông đảo người dân và các doanh nghiệp địa phương tham gia. Chương trình bao gồm các hoạt động thiết thực như hội thảo, triển lãm sản phẩm thân thiện với môi trường và các chiến dịch trồng cây xanh nhằm lan tỏa ý thức bảo vệ thiên nhiên.",
            image: News2,
            alt: "Sự kiện bảo vệ môi trường tại Sóc Trăng",
            facebookLink: "https://www.facebook.com/share/p/1A1GC4sjuj/"
        },
        {
            id: 1,
            title: "Nhà Balabin gọi vốn thành công 50 triệu cho dự án mở rộng",
            category: "Đầu tư",
            date: "19/01/2025",
            summary: "Nhà Balabin vừa được tài trợ cho dự án mở rộng sản xuất với tổng đầu tư 50 triệu.",
            content: "Nhà Balabin vừa được tài trợ 50 triệu cho dự án mở rộng sản xuất, đánh dấu một cột mốc quan trọng trong quá trình phát triển của công ty.",
            image: News3,
            alt: "Nhà Balabin gọi vốn thành công",
            facebookLink: "https://www.facebook.com/share/p/19NGAdBey9/"
        }
    ];

    return (
        <section className="news-section py-5">
            <Container>
                <div className="section-header text-center mb-5">
                    <h1 className="fw-bold">Tin Tức & Sự Kiện Mới Nhất</h1>
                    <p className="text-muted mt-2">Cập nhật những thông tin mới nhất về Nhà Balabin và ngành công nghiệp</p>
                    <div className="divider mt-3 mx-auto"></div>
                </div>

                {/* Tin nổi bật */}
                {newsItems.length > 0 && (
                    <div className="featured-news mb-5">
                        <Row className="g-4">
                            <Col md={7}>
                                <article className="featured-card h-100">
                                    <div className="card-img-wrapper">
                                        <img
                                            src={newsItems[1].image}
                                            alt={newsItems[1].alt}
                                            className="img-fluid rounded"
                                            loading="lazy"
                                        />
                                        <span className="category-badge">{newsItems[1].category}</span>
                                    </div>
                                    <div className="featured-content p-4">
                                        <h2 className="article-title">
                                            <a href={newsItems[1].lazadaLink} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                                {newsItems[1].title}
                                            </a>
                                        </h2>
                                        <div className="article-meta d-flex align-items-center mt-2 mb-3">
                                            <FaCalendarAlt className="me-2 text-primary" />
                                            <span className="date">{newsItems[1].date}</span>
                                        </div>
                                        <p className="article-summary">{newsItems[1].content}</p>
                                        <div className="d-flex mt-3 flex-wrap gap-2">
                                            <Button as="a" href={newsItems[1].lazadaLink} target="_blank" variant="outline-danger">
                                                <FaShoppingCart className="me-2" /> Mua sắm ngay trên Lazada
                                            </Button>
                                            <Button as="a" href={newsItems[1].facebookLink} target="_blank" variant="outline-primary">
                                                <FaFacebook className="me-2" /> Xem trên Facebook
                                            </Button>
                                        </div>
                                    </div>
                                </article>
                            </Col>
                            <Col md={5}>
                                <Row className="g-4 h-100">
                                    {[newsItems[0], newsItems[2]].map(item => (
                                        <Col xs={12} key={item.id}>
                                            <Card className="h-100 shadow-sm border-0">
                                                <Row className="g-0 h-100">
                                                    <Col xs={5}>
                                                        <Card.Img
                                                            src={item.image}
                                                            alt={item.alt}
                                                            className="img-fluid h-100 rounded-start"
                                                            style={{ objectFit: 'cover' }}
                                                            loading="lazy"
                                                        />
                                                    </Col>
                                                    <Col xs={7}>
                                                        <Card.Body className="d-flex flex-column h-100">
                                                            <Card.Title className="h6">{item.title}</Card.Title>
                                                            <div className="article-meta d-flex align-items-center mt-2 mb-2">
                                                                <FaCalendarAlt className="me-2 text-primary small" />
                                                                <span className="date small">{item.date}</span>
                                                            </div>
                                                            <Card.Text className="small">{item.summary}</Card.Text>
                                                            <div className="mt-auto">
                                                                <a href={item.facebookLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                                                                    <FaFacebook className="me-1" /> Facebook
                                                                </a>
                                                            </div>
                                                        </Card.Body>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </div>
                )}

                {/* Tất cả tin còn lại (ngoại trừ Lazada) */}
                <div className="all-news-list mt-5">
                    <h2 className="mb-4">Tất cả tin tức</h2>
                    <Row className="g-4">
                        {newsItems
                            .filter((_, index) => index !== 1)
                            .map(item => (
                                <Col key={item.id} md={6} lg={4}>
                                    <Card className="h-100 shadow-sm border-0">
                                        <div className="position-relative">
                                            <Card.Img
                                                variant="top"
                                                src={item.image}
                                                alt={item.alt}
                                                loading="lazy"
                                                style={{ height: '200px', objectFit: 'cover' }}
                                            />
                                            <span className="category-badge small">{item.category}</span>
                                        </div>
                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title className="h6">{item.title}</Card.Title>
                                            <div className="article-meta d-flex align-items-center mt-1 mb-2">
                                                <FaCalendarAlt className="me-2 text-primary small" />
                                                <span className="date small">{item.date}</span>
                                            </div>
                                            <Card.Text className="small">{item.summary}</Card.Text>
                                            <div className="mt-auto d-flex justify-content-end">
                                                <Button
                                                    as="a"
                                                    href={item.facebookLink}
                                                    target="_blank"
                                                    variant="outline-primary"
                                                    size="sm"
                                                >
                                                    <FaFacebook className="me-1" /> Facebook
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                </div>

                {/* Liên kết bổ sung */}
                <div className="text-center mt-5">
                    <Button as="a" href="https://www.facebook.com/profile.php?id=61568821003334" target="_blank" variant="primary" className="me-3 px-4">
                        <FaFacebook className="me-2" /> Xem tất cả trên Facebook
                    </Button>
                    <Button as="a" href="https://www.lazada.vn/shop/eco-bap" target="_blank" variant="danger" className="px-4">
                        <FaShoppingCart className="me-2" /> Mua sắm trên Lazada
                    </Button>
                </div>
            </Container>
        </section>
    );
}

export default News;
