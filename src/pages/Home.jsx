import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { products } from "../db";

import img1 from "../img/sanpham.jpg";
import img2 from "../img/baovemoitruong.jpg";
import img3 from "../img/daotaonghe.jpg";
import img4 from "../img/business.jpg";
import img6 from "../img/gianhang.jpg";
import img7 from "../img/gianhangtetjpg.jpg";
import img8 from "../img/XuanSacTayDo.jpg";
import img9 from "../img/wsSocTrang.jpg";
import img10 from "../img/gianhangarthouse.jpg";
import img11 from "../img/lamGiay.jpg";
import fpt from "../img/fpt.jpg";
import ecoka from "../img/ecoka.jpg";
import quyenDesigner from "../img/QuyenDesigner.png";
import artHouse from "../img/artHouse.png";
import nhaCoBinhThuy from "../img/nhaCoBinhThuy.jpg";
import anhNhom from "../img/AnhNhom.jpg";
import members from "../img/members.jpg";

// Import member photos (bạn cần thêm các ảnh này vào thư mục img)
import member1 from "../img/ThayAn.jpg";
import member2 from "../img/Nghi.jpg";
import member3 from "../img/LeThang.jpeg";
import member4 from "../img/QuynhNhu.jpg";
import member5 from "../img/Khuyen.jpg";
import member6 from "../img/MinhThu.jpg";

import "../cssPages/Home.css";
import { useCart } from "../contexts/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomCarousel() {
  const scrollToProducts = () => {
    document.querySelector(".product-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Carousel
      fade
      interval={2000}
      className="custom-carousel"
      pause={false}
      touch={true}
    >
      <Carousel.Item>
        <div className="carousel-image-container">
          <img src={nhaCoBinhThuy} alt="First slide" />
          <div className="carousel-overlay">
            <h2>Xu Hướng Tiêu Dùng Xanh</h2>
            <p>Từ nguyên liệu tự nhiên đến đôi tay khéo léo – sản phẩm của chúng tôi là lựa chọn cho tương lai.</p>

            <button className="carousel-btn" onClick={scrollToProducts}>
              Xem thêm
            </button>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img src={img9} alt="Second slide" />
          <div className="carousel-overlay">
            <h2>Đội Ngũ Chuyên Nghiệp</h2>
            <p>Làm việc với đội ngũ chuyên nghiệp và tận tâm của chúng tôi</p>
            <button
              className="carousel-btn"
              onClick={() => (window.location.href = "/shop")}
            >
              Sản Phẩm            </button>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img src={img10} alt="Third slide" />
          <div className="carousel-overlay">
            <h2>Sản Phẩm Thân Thiện Với Môi Trường</h2>
            <p>Chúng tôi mang đến những sản phẩm xanh, an toàn và đáp ứng sự hài lòng của bạn.</p>

            <button
              className="carousel-btn"
              onClick={() => (window.location.href = "/contact")}
            >
              Liên Hệ
            </button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

function Home() {
  const product = products;
  const [visibleProducts, setVisibleProducts] = React.useState(4);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const events = [
    {
      image: img11,
      title: "Nhóm ra mắt giấy từ vỏ bắp",
      description:
        "Giấy thủ công làm từ vỏ bắp với bề mặt mộc mạc, giữ nguyên nét thô tự nhiên, thân thiện với môi trường – thích hợp để viết tay, vẽ tranh hoặc làm quà tặng nghệ thuật."
    },
    {
      image: img10,
      title: "Gian Hàng Tại Nhà Cổ Bình Thủy",
      description:
        "Tọa lạc trong không gian di sản Nhà Cổ Bình Thủy, gian hàng là nơi tôn vinh giá trị truyền thống qua những sản phẩm thủ công xanh và bền vững."
    },
    {
      image: img9,
      title: "Nghề Truyền Thống Giá Trị Mới",
      description:
        "Workshop tuyên truyền và nâng cao nhận thức cho bà con tại ấp Hòa Thọ tỉnh Sóc Trăng."
    },
    {
      image: img8,
      title: "Xuân Sắc Tây Đô",
      description:
        "Sự kiện giao lưu và tri ân các nhà giáo Đại học FPT, tôn vinh một năm cống hiến cho tri thức."
    },
    {
      image: img7,
      title: "Gian Hàng Tết",
      description:
        "Mang đến sự hòa quyện giữa giá trị văn hóa Tết truyền thống và sáng tạo xanh, với những sản phẩm thân thiện môi trường, đậm nét độc đáo."
    },
    {
      image: img6,
      title: "Kết Nối Gian Hàng",
      description:
        "Nơi các sản phẩm độc đáo được trưng bày và giới thiệu, kết nối khách hàng với những giá trị tinh tế và bền vững."
    },
    {
      image: img4,
      title: "Workshop Kết Nối Nghệ Nhân",
      description:
        "Quy trình để tạo nên sản phẩm xanh, kết nối trực tiếp với những người thợ lành nghề giàu kinh nghiệm."
    },
    {
      image: img1,
      title: "Workshop Nghề Truyền Thống Giá Trị Mới",
      description: "Workhop nâng cao nhận thức tại Đại Học FPT"
    }
  ];

  // Thông tin thành viên nhóm
  const teamMembers = [
    {
      id: 1,
      name: "Võ Thiên Ân",
      position: "Giảng viên hướng dẫn",
      image: member1,
      description: "Giảng viên giàu kinh nghiệm, hỗ trợ và định hướng nhóm trong quá trình nghiên cứu và phát triển sản phẩm.",
      skills: ["Hướng dẫn học thuật", "Phát triển dự án", "Định hướng chiến lược"],
      social: {
        linkedin: "#",
        email: "an@balabin.com"
      }
    }, {
      id: 2,
      name: "Đặng Thị Tuyết Nghi",
      position: "Leader / CEO",
      image: member2,
      description: "Lãnh đạo nhóm với tư duy chiến lược và tầm nhìn phát triển sản phẩm từ vật liệu bền vững.",
      skills: ["Lãnh đạo", "Chiến lược doanh nghiệp", "Quản lý nhóm"],
      social: {
        linkedin: "#",
        email: "Nghidttcs170671@fpt.edu.vn"
      }
    },
    {
      id: 3,
      name: "Lê Hữu Thắng",
      position: "CTO / Giám đốc Công nghệ",
      image: member3,
      description: "Phụ trách phát triển công nghệ và tối ưu hóa quy trình số hóa trong dự án.",
      skills: ["Công nghệ thông tin", "Phát triển hệ thống", "Tự động hóa"],
      social: {
        linkedin: "#",
        email: "Thanglhce171168@fpt.edu.vn"
      }
    },
    {
      id: 4,
      name: "Phạm Thị Quỳnh Như",
      position: "CFO / Giám đốc Tài chính",
      image: member4,
      description: "Quản lý ngân sách và tài chính, đảm bảo tính bền vững cho các hoạt động của nhóm.",
      skills: ["Tài chính doanh nghiệp", "Phân tích chi phí", "Lập kế hoạch ngân sách"],
      social: {
        linkedin: "#",
        email: "Nhuptqce171947@fpt.edu.vn"
      }
    },
    {
      id: 5,
      name: "Phan Hồng Khuyến",
      position: "CPO / Điều phối sản xuất",
      image: member5,
      description: "Hỗ trợ điều phối quy trình sản xuất và đảm bảo chất lượng sản phẩm đầu ra.",
      skills: ["Sản xuất", "Quản lý chất lượng", "Vận hành"],
      social: {
        linkedin: "#",
        email: "Khuyenphcs171177@fpt.edu.vn"
      }
    },
    {
      id: 6,
      name: "Trần Minh Thư",
      position: "CMO / Giám đốc Marketing",
      image: member6,
      description: "Hỗ trợ trong truyền thông, tổ chức sự kiện và kết nối cộng đồng.",
      skills: ["Truyền thông", "Sự kiện", "Quan hệ đối ngoại"],
      social: {
        linkedin: "#",
        email: "Thutmcs170353@fpt.edu.vn"
      }
    }
  ];

  const handlePrevEvent = () => {
    setCurrentEventIndex((prev) => {
      const maxIndex = Math.ceil(events.length / 4) - 1;
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  const handleNextEvent = () => {
    setCurrentEventIndex((prev) => {
      const maxIndex = Math.ceil(events.length / 4) - 1;
      return prev === maxIndex ? 0 : prev + 1;
    });
  };

  const handleLoadMore = () => {
    setVisibleProducts(products.length);
  };

  return (
    <div className="home-container">
      <ToastContainer />
      <CustomCarousel />

      <div className="tag-list">
        <div className="inner">
          <div className="tag"> Welcome </div>
          <div className="tag"> To</div>
          <div className="tag"> Balabin</div>
          <div className="tag"> </div>
          <div className="tag"> Welcome </div>
          <div className="tag"> To</div>
          <div className="tag"> Balabin</div>
          <div className="tag"> </div>
          <div className="tag"> Welcome </div>
          <div className="tag"> To</div>
          <div className="tag"> Balabin</div>
          <div className="tag"> </div>
          <div className="tag"> Welcome </div>
          <div className="tag"> To</div>
          <div className="tag"> Balabin</div>
        </div>
        <div className="fade"> </div>
      </div>

      <div className="home-hero">
        <div className="hero-image">
          <img src={anhNhom} alt="Hero" />
        </div>
        <div className="hero-content">
          <h1>Về chúng tôi</h1>
          <p>
            Dự án BALABIN là sáng kiến nhằm chuyển hóa phụ phẩm nông nghiệp – cụ thể là vỏ bắp – thành các sản phẩm thủ công mang giá trị văn hóa và kinh tế. Chúng tôi hướng đến phát triển bền vững thông qua việc giảm thiểu rác thải, bảo tồn nghề thủ công truyền thống vùng Đồng bằng sông Cửu Long, đồng thời tạo sinh kế ổn định cho cộng đồng địa phương. BALABIN không chỉ cung cấp sản phẩm thân thiện với môi trường mà còn lan tỏa lối sống xanh, thúc đẩy nhận thức về tái chế và bảo vệ văn hóa Việt.
          </p>

          <button
            className="hero-btn"
            onClick={() => (window.location.href = "/shop")}
          >
            Xem ngay
          </button>
        </div>
      </div>

      <div className="product-section">
        <h2>Sản Phẩm Nổi Bật</h2>
        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-content">
                <h3>{product.name}</h3>
                <div className="product-price">
                  {product.price.toLocaleString()} VNĐ
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="activities-section">
        <h2>Tầm Nhìn Và Sứ Mệnh</h2>
        <div className="activities-container">
          <div className="activity-item">
            <div className="activity-image">
              <img src={img2} alt="Hoạt động 1" />
            </div>
            <div className="activity-content">
              <h3>Nâng cao nhận thức, ý thức bảo vệ môi trường</h3>
              <p>
                Chủ động nâng cao ý thức bảo vệ môi trường, đồng thời lan tỏa tinh thần trách nhiệm, khuyến khích mỗi cá nhân và tập thể cùng chung tay gìn giữ, bảo vệ hệ sinh thái và môi trường sống bền vững cho thế hệ hôm nay và mai sau.

              </p>
            </div>
          </div>

          <div className="activity-item reverse">
            <div className="activity-image">
              <img src={img3} alt="Hoạt động 2" />
            </div>
            <div className="activity-content">
              <h3>Tạo ra nguồn thu nhập cho cộng đồng</h3>
              <p>
                Tổ chức các khóa đào tạo kỹ năng thủ công truyền thống kết hợp kiến thức phát triển sản phẩm bền vững, giúp học viên vừa gìn giữ nét đẹp văn hóa, vừa tạo ra những sản phẩm thân thiện với môi trường, đáp ứng nhu cầu thị trường hiện đại.

              </p>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-image">
              <img src={img4} alt="Hoạt động 3" />
            </div>
            <div className="activity-content">
              <h3>Kết nối doanh nghiệp</h3>
              <p>
                Tăng cường hợp tác và liên kết chặt chẽ với các đối tác, doanh nghiệp trong và ngoài nước, cùng chung tay xây dựng chiến lược phát triển, mở rộng thị trường tiêu thụ, tạo điều kiện để sản phẩm tiếp cận nhiều khách hàng hơn và nâng cao giá trị thương hiệu.

              </p>
            </div>
          </div>


        </div>
      </div>

      {/* Team Members Section */}
      <div className="team-section">
        <div className="team-header">
          <h2>Đội Ngũ Thành Viên</h2>
          <p>Gặp gỡ những con người tài năng đằng sau thành công của Balabin</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-card-inner">
                <div className="team-card-front">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                    <div className="member-overlay">
                      <div className="member-info">
                        <h3>{member.name}</h3>
                        <p>{member.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-card-back">
                  <div className="member-details">
                    <h3>{member.name}</h3>
                    <h4>{member.position}</h4>
                    <p>{member.description}</p>
                    <div className="member-skills">
                      <h5>Chuyên môn:</h5>
                      <ul>
                        {member.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="member-contact">
                      <a href={`mailto:${member.social.email}`} className="contact-btn">
                        Liên hệ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="events-section">
        <h2>Sự Kiện và Workshop</h2>
        <div className="events-carousel">
          <button
            className="carousel-nav prev"
            onClick={() =>
              document.querySelector(".events-grid-wrapper").scrollBy({ left: -300, behavior: "smooth" })
            }
          >
            ❮
          </button>

          <div className="events-grid-wrapper">
            <div className="events-grid">
              {events.map((event, index) => (
                <div className="event-card" key={index}>
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="event-content">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-nav next"
            onClick={() =>
              document.querySelector(".events-grid-wrapper").scrollBy({ left: 300, behavior: "smooth" })
            }
          >
            ❯
          </button>
        </div>
      </div>

      <div className="partners-section">
        <h2>Các Đối Tác </h2>
        <div className="partners-grid">
          <div className="partner-card">
            <div className="partner-logo">
              <img src={fpt} alt="Đối tác 1" />
            </div>
            <h3>Trường Đại Học FPT</h3>
            <p>
              Đồng hành cùng dự án, mang đến nguồn lực vững chắc và tạo nền tảng phát triển bền vững cho những ý tưởng sáng tạo.
            </p>
          </div>
          <div className="partner-card">
            <div className="partner-logo">
              <img src={ecoka} alt="Đối tác 2" />
            </div>
            <h3>Công ty cổ phần Ecoka</h3>
            <p>
              Đối tác chiến lược hợp tác nhằm đảm bảo nguồn nguyên liệu chất lượng cao.
            </p>
          </div>

          <div className="partner-card">
            <div className="partner-logo">
              <img src={artHouse} alt="Đối tác 3" />
            </div>
            <h3>Art House</h3>
            <p>
              Đối tác đồng hành trong lĩnh vực mỹ thuật ứng dụng và kênh phân phối sản phẩm sáng tạo.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;