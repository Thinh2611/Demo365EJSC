import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 🧩 Components
import Navbar from './components/Header';     //  Zustand
import Footer from './components/Footer';

// 📄 Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import CartPage from './pages/CartPage';         // 🛒 Giỏ hàng
import CheckoutPage from './pages/CheckoutPage'; // 💳 Thanh toán

function App() {
  return (
    <div className="app-root">
      {/* 🌐 Thanh điều hướng dùng Zustand */}
      <Navbar />

      {/* 📌 Khu vực nội dung chính */}
      <main className="main-container">
        <Routes>
          {/* Trang chính */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<About />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 🛒 Giỏ hàng + 💳 Thanh toán */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* 404 - Trang không tồn tại */}
          <Route
            path="*"
            element={
              <div style={{ padding: 40, textAlign: 'center' }}>
                <h2>❌ Không tìm thấy trang</h2>
                <p>
                  Vui lòng kiểm tra lại đường dẫn hoặc{' '}
                  <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                    quay về trang chủ
                  </a>.
                </p>
              </div>
            }
          />
        </Routes>
      </main>

      {/* 🌐 Footer chung */}
      <Footer />
    </div>
  );
}

export default App;
