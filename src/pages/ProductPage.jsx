import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import { useCartStore } from '../store/useCartStore';

const formatPrice = (v) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCartStore();

  const [selectedSize, setSelectedSize] = useState('');
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h2>Không tìm thấy sản phẩm 😢</h2>
        <p>
          Vui lòng quay lại <a href="/shop">Shop</a>
        </p>
      </div>
    );
  }

  // 🛒 Xử lý thêm vào giỏ
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Vui lòng chọn size trước khi thêm vào giỏ 📝');
      return;
    }
    addToCart({ ...product, size: selectedSize });
    alert('✅ Đã thêm vào giỏ hàng!');
  };

  // 🛍️ Xử lý Mua ngay
  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Vui lòng chọn size trước khi mua 📝');
      return;
    }
    addToCart({ ...product, size: selectedSize });
    navigate('/checkout');
  };

  return (
    <div className="product-page container">
      {/* Ảnh sản phẩm */}
      <div className="product-images">
        {product.images.map((img, idx) => (
          <img key={idx} src={img} alt={product.name} className="main-image" />
        ))}
      </div>

      {/* Thông tin sản phẩm */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <div className="price">{formatPrice(product.price)}</div>
        <p className="description">{product.description}</p>

        {/* 🔸 Chọn size */}
        <div className="sizes">
          <strong>Chọn size: </strong>
          {['S', 'M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? 'active' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* 📐 Bảng size đơn giản */}
        <div className="size-chart">
          <h4>📏 Bảng thông số size</h4>
          <table>
            <thead>
              <tr>
                <th>Size</th>
                <th>Chiều cao (cm)</th>
                <th>Cân nặng (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S</td>
                <td>150 - 160</td>
                <td>40 - 50</td>
              </tr>
              <tr>
                <td>M</td>
                <td>160 - 170</td>
                <td>50 - 60</td>
              </tr>
              <tr>
                <td>L</td>
                <td>170 - 180</td>
                <td>60 - 70</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>180+</td>
                <td>70+</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hành động */}
        <div className="actions" style={{ marginTop: 16 }}>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            🛒 Thêm vào giỏ
          </button>
          <button
            className="btn btn-outline"
            style={{ marginLeft: '10px' }}
            onClick={handleBuyNow}
          >
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
