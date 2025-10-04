import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      {/* 🔹 Banner giới thiệu */}
      <section className="about-hero">
        <div className="container">
          <h1>Về BrightWear</h1>
          <p>
            Nâng tầm phong cách mỗi ngày — BrightWear mang đến cho bạn những trang phục hiện đại, chất lượng và phù hợp với mọi phong cách sống.
          </p>
        </div>
      </section>

      {/* 🔹 Phần giới thiệu */}
      <section className="about-intro container">
        <h2>Hành trình của chúng tôi</h2>
        <p>
          BrightWear bắt đầu từ một xưởng may nhỏ với mong muốn mang lại những sản phẩm thời trang chất lượng cao với mức giá hợp lý. 
          Chúng tôi tin rằng quần áo không chỉ để mặc — mà còn thể hiện cá tính, cảm xúc và phong cách sống của mỗi người.
        </p>
        <p>
          Sau nhiều năm phát triển, BrightWear đã trở thành thương hiệu thời trang được yêu thích bởi sự kết hợp hoàn hảo giữa thiết kế tối giản, chất liệu thoáng mát và đường may tỉ mỉ.
        </p>
      </section>

      {/* 🔹 Giá trị thương hiệu */}
      <section className="about-values container">
        <h2>Giá trị cốt lõi</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>✨ Chất lượng</h3>
            <p>Chúng tôi ưu tiên chất liệu tốt, thân thiện với môi trường, cùng quy trình sản xuất tỉ mỉ để mang đến trải nghiệm tốt nhất.</p>
          </div>
          <div className="value-card">
            <h3>🌿 Bền vững</h3>
            <p>BrightWear cam kết giảm thiểu rác thải thời trang, khuyến khích tái chế và tái sử dụng sản phẩm cũ.</p>
          </div>
          <div className="value-card">
            <h3>🤝 Khách hàng là trung tâm</h3>
            <p>Mọi sản phẩm và dịch vụ của chúng tôi đều được xây dựng dựa trên trải nghiệm và nhu cầu thực tế của khách hàng.</p>
          </div>
        </div>
      </section>

      {/* 🔹 Đội ngũ */}
      <section className="about-team container">
        <h2>Đội ngũ của chúng tôi</h2>
        <p>
          Đằng sau BrightWear là một tập thể trẻ trung, sáng tạo và nhiệt huyết. 
          Từ nhà thiết kế, thợ may đến đội ngũ chăm sóc khách hàng — tất cả cùng hướng tới mục tiêu mang lại sự hài lòng tối đa cho bạn.
        </p>
      </section>

      {/* 🔹 Lời kết */}
      <section className="about-footer">
        <div className="container">
          <h2>Cảm ơn bạn đã đồng hành cùng BrightWear 💜</h2>
          <p>
            Hãy tiếp tục cùng chúng tôi tạo nên những phong cách sống hiện đại và bền vững hơn mỗi ngày.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
