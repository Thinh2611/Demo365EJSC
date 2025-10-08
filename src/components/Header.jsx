import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore'; // 🧠 Zustand giỏ hàng

const Navbar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const user = localStorage.getItem('loggedInUser');

  // 🛍️ Lấy số lượng sản phẩm trong giỏ từ Zustand
  const cartCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  // 🔍 Xử lý tìm kiếm
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
        {/* 🧢 Logo */}
        <Link to="/" className="brand">
          <span className="logo">👕</span>
          <span className="brand-name">BrightWear</span>
        </Link>

        {/* 🧭 Menu điều hướng */}
        <nav className="nav">
          <NavLink to="/" end>
            Trang chủ
          </NavLink>
          <NavLink to="/shop">Sản phẩm</NavLink>
          <NavLink to="/about">Giới thiệu</NavLink>
          <NavLink to="/cart">
            Giỏ hàng 🛒
            {cartCount > 0 && (
              <span
                style={{
                  background: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 8px',
                  marginLeft: '4px',
                  fontSize: '0.8rem',
                }}
              >
                {cartCount}
              </span>
            )}
          </NavLink>
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

        {/* 👤 Tài khoản */}
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
