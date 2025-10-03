import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="hero container">
      <div className="hero-left">
        <h1>BrightWear — Trang phục tươi sáng cho mọi ngày</h1>
        <p>
          Bộ sưu tập mới, chất liệu thoáng mát, thiết kế hiện đại. Khám phá ngay các sản phẩm được tuyển chọn.
        </p>
        <div>
          <Link to="/shop" className="btn btn-primary">
            Mua ngay
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <img src="/assets/banner.jpeg" alt="hero" />
      </div>
    </section>
  );
};

export default Home;
