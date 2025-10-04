import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 🧩 Components
import Header from './components/Header';
import Footer from './components/Footer';

// 📄 Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import CartPage from './pages/CartPage';       // 🛒 Thêm trang Giỏ hàng
import CheckoutPage from './pages/CheckoutPage'; // 💳 Thêm trang Thanh toán

function App() {
  return (
    <div className="app-root">
      {/* 🌐 Header chung cho toàn trang */}
      <Header />

      {/* 📌 Khu vực hiển thị nội dung trang */}
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
              <div style={{ padding: 40 }}>
                <h2>❌ Không tìm thấy trang</h2>
                <p>Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ.</p>
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
