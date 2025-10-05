import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const user = localStorage.getItem('loggedInUser');

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  // 🔍 Hàm xử lý tìm kiếm
  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim() !== '') {
      navigate(`/shop?search=${encodeURIComponent(keyword)}`);
      setKeyword('');
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" className="brand">
          <span className="logo">👕</span>
          <span className="brand-name">BrightWear</span>
        </Link>

        {/* Menu */}
        <nav className="nav">
          <NavLink to="/" end>
            Trang chủ
          </NavLink>
          <NavLink to="/shop">Sản phẩm</NavLink>
          <NavLink to="/about">Giới thiệu</NavLink>
          <NavLink to="/cart">Giỏ hàng 🛒</NavLink>
        </nav>

        {/* 🔍 Thanh tìm kiếm */}
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Tìm sản phẩm..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>

        {/* Tài khoản */}
        <div className="auth-section">
          {!user ? (
            <>
              <Link to="/login" className="btn btn-primary">
                Đăng nhập
              </Link>
              <Link to="/register" className="btn btn-primary" style={{ marginLeft: '8px' }}>
                Đăng ký
              </Link>
            </>
          ) : (
            <>
              <span>Xin chào, {user}</span>
              <button
                onClick={handleLogout}
                className="btn btn-outline"
                style={{ marginLeft: '8px' }}
              >
                Đăng xuất
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
