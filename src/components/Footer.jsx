import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Cột 1: Logo + mô tả */}
        <div className="footer-col">
          <h2 className="footer-logo">BrightWear</h2>
          <p>
            Thời trang tối giản, hiện đại, chất liệu cao cấp – đồng hành cùng bạn mỗi ngày ✨
          </p>
        </div>

        {/* Cột 2: Thông tin liên hệ */}
        <div className="footer-col">
          <h4>📞 Liên hệ</h4>
          <ul>
            <li>SĐT: <a href="tel:0123456789">0123 456 789</a></li>
            <li>Email: <a href="mailto:support@brightwear.vn">support@brightwear.vn</a></li>
            <li>Địa chỉ: 123 Nguyễn Trãi, Quận 1, TP. Hồ Chí Minh</li>
          </ul>
        </div>

        {/* Cột 3: Chăm sóc khách hàng */}
        <div className="footer-col">
          <h4>🧰 Chăm sóc khách hàng</h4>
          <ul>
            <li><Link to="/policy">Chính sách đổi trả</Link></li>
            <li><Link to="/shipping">Giao hàng & Thanh toán</Link></li>
            <li><Link to="/faq">Câu hỏi thường gặp</Link></li>
            <li><Link to="/contact">Liên hệ hỗ trợ</Link></li>
          </ul>
        </div>

        {/* Cột 4: Mạng xã hội */}
        <div className="footer-col">
          <h4>🌐 Kết nối với chúng tôi</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><FaTiktok /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} BrightWear — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
