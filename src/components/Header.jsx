import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('loggedInUser');

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="logo">👕</span>
          <span className="brand-name">BrightWear</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end>Trang chủ</NavLink>
          <NavLink to="/shop">Sản phẩm</NavLink>
          <NavLink to="/about">Giới thiệu</NavLink>
        </nav>

        <div>
          {!user ? (
            <>
              <Link to="/login" className="btn btn-primary">Đăng nhập</Link>
              <Link to="/register" className="btn btn-primary" style={{ marginLeft: '8px' }}> Đăng ký</Link>
            </>
          ) : (
            <>
              <span>Xin chào, {user}</span>
              <button onClick={handleLogout} className="btn btn-outline" style={{marginLeft: '8px'}}>
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
