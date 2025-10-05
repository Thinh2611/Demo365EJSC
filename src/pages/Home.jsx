import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // ✅ cần để hiện sản phẩm demo

// 🛍️ Sản phẩm demo để trang Home sinh động
const demoProducts = [
  {
    id: 4,
    name: 'Áo thun Unisex trắng',
    price: 199000,
    images: [
      '/assets/aotayngan.webp'
    ]
  },
  {
    id: 5,
    name: 'Áo sơ mi nam cổ đứng',
    price: 299000,
    images: [
     '/assets/aocodung.webp'
    ]
  },
  {
    id: 6,
    name: 'Quần jean nữ dáng ôm',
    price: 359000,
    images: [
      '/assets/quannu.webp'
    ]
  },
  {
    id: 7,
    name: 'Áo khoác Hoodie mùa đông',
    price: 459000,
    images: [
      '/assets/aomuadong.webp'
    ]
  },
  {
    id: 8,
    name: 'Áo khoác Kaki',
    price: 459000,
    images: ['/assets/aokaki.webp']
  },
  {
    id: 9,
    name: 'Quần sót nam',
    price: 459000,
    images: ['/assets/quansot.webp']
  },
  {
    id: 10,
    name: 'Quần tây nam',
    price: 459000,
    images: ['/assets/quantay.webp']
  },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* 🌟 HERO BANNER */}
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

      {/* 🛍️ SẢN PHẨM NỔI BẬT */}
      <section className="container" style={{ marginTop: '40px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>✨ Sản phẩm nổi bật</h2>
        <div className="grid">
          {demoProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* CTA cuối trang */}
      <section style={{ textAlign: 'center', marginTop: '50px' }}>
        <h3>Khám phá thêm nhiều sản phẩm hấp dẫn khác</h3>
        <Link to="/shop" className="btn btn-outline" style={{ marginTop: '15px' }}>
          Xem tất cả sản phẩm
        </Link>
      </section>
    </div>
  );
};

export default Home;
