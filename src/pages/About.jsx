import React from 'react';
import { useForm } from 'react-hook-form';

const About = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('📩 Ý kiến người dùng:', data);
    alert('✅ Cảm ơn bạn đã gửi ý kiến!');
    reset();
  };

  return (
    <div className="about-page">
      {/* 🔹 Banner giới thiệu */}
      <section className="about-hero fade-in-down">
        <div className="container">
          <h1>Về BrightWear</h1>
          <p>
            Nâng tầm phong cách mỗi ngày — BrightWear mang đến cho bạn những trang phục hiện đại,
            chất lượng và phù hợp với mọi phong cách sống.
          </p>
        </div>
      </section>

      {/* 🔹 Phần giới thiệu */}
      <section className="about-intro container fade-in-up fade-delay-1">
        <h2>Hành trình của chúng tôi</h2>
        <p>
          BrightWear bắt đầu từ một xưởng may nhỏ với mong muốn mang lại những sản phẩm thời trang
          chất lượng cao với mức giá hợp lý. Chúng tôi tin rằng quần áo không chỉ để mặc — mà còn thể hiện cá tính, cảm xúc và phong cách sống của mỗi người.
        </p>
        <p>
          Sau nhiều năm phát triển, BrightWear đã trở thành thương hiệu thời trang được yêu thích
          bởi sự kết hợp hoàn hảo giữa thiết kế tối giản, chất liệu thoáng mát và đường may tỉ mỉ.
        </p>
      </section>

      {/* 🔹 Giá trị thương hiệu */}
      <section className="about-values container fade-in-up fade-delay-2">
        <h2>Giá trị cốt lõi</h2>
        <div className="values-grid">
          <div className="value-card fade-in-up fade-delay-1">
            <h3>✨ Chất lượng</h3>
            <p>
              Chúng tôi ưu tiên chất liệu tốt, thân thiện với môi trường, cùng quy trình sản xuất
              tỉ mỉ để mang đến trải nghiệm tốt nhất.
            </p>
          </div>
          <div className="value-card fade-in-up fade-delay-2">
            <h3>🌿 Bền vững</h3>
            <p>
              BrightWear cam kết giảm thiểu rác thải thời trang, khuyến khích tái chế và tái sử dụng sản phẩm cũ.
            </p>
          </div>
          <div className="value-card fade-in-up fade-delay-3">
            <h3>🤝 Khách hàng là trung tâm</h3>
            <p>
              Mọi sản phẩm và dịch vụ của chúng tôi đều được xây dựng dựa trên trải nghiệm và nhu cầu
              thực tế của khách hàng.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Đội ngũ */}
      <section className="about-team container fade-in-up fade-delay-2">
        <h2>Đội ngũ của chúng tôi</h2>
        <p>
          Đằng sau BrightWear là một tập thể trẻ trung, sáng tạo và nhiệt huyết. 
          Từ nhà thiết kế, thợ may đến đội ngũ chăm sóc khách hàng — tất cả cùng hướng tới mục tiêu mang lại sự hài lòng tối đa cho bạn.
        </p>
      </section>

      {/* ✍️ Form góp ý sử dụng React Hook Form */}
      <section className="about-feedback container fade-in-up fade-delay-2">
        <h2>💬 Gửi ý kiến đóng góp</h2>
        <p>Chúng tôi rất mong nhận được phản hồi của bạn để cải thiện dịch vụ tốt hơn.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="feedback-form">
          <div>
            <label>Họ tên</label>
            <input
              type="text"
              {...register('name', { required: 'Vui lòng nhập họ tên' })}
              placeholder="Nhập họ tên của bạn"
            />
            {errors.name && <span className="error-text">{errors.name.message}</span>}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Vui lòng nhập email',
                pattern: { value: /^\S+@\S+$/i, message: 'Email không hợp lệ' },
              })}
              placeholder="example@gmail.com"
            />
            {errors.email && <span className="error-text">{errors.email.message}</span>}
          </div>

          <div>
            <label>Ý kiến</label>
            <textarea
              rows="4"
              {...register('message', { required: 'Vui lòng nhập ý kiến' })}
              placeholder="Chia sẻ cảm nhận của bạn..."
            ></textarea>
            {errors.message && <span className="error-text">{errors.message.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
            Gửi phản hồi
          </button>
        </form>
      </section>

      {/* 🔹 Lời kết */}
      <section className="about-footer fade-in-down fade-delay-1">
        <div className="container">
          <h2>Cảm ơn bạn đã đồng hành cùng BrightWear 💜</h2>
          <p>Hãy tiếp tục cùng chúng tôi tạo nên những phong cách sống hiện đại và bền vững hơn mỗi ngày.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
