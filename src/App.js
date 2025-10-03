import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<div style={{padding:40}}>Không tìm thấy trang</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
