import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const formatPrice = (v) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // ✅ Thêm vào giỏ hàng nhưng không chuyển trang
  const handleAddToCart = () => {
    addToCart(product);
    alert('✅ Sản phẩm đã được thêm vào giỏ hàng!');
  };

  // ✅ Mua ngay → thêm và chuyển sang giỏ hàng
  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="img-wrap">
        <img src={product.images[0]} alt={product.name} />
      </Link>

      <div className="meta">
        <h3 className="title">{product.name}</h3>
        <div className="price">{formatPrice(product.price)}</div>

        <div className="actions">
          <Link to={`/product/${product.id}`} className="btn">
            Xem
          </Link>

          {/* 🛒 Thêm vào giỏ hàng */}
          <button className="btn btn-outline" onClick={handleAddToCart}>
            Thêm vào giỏ
          </button>

          {/* 🟣 Mua ngay */}
          <button className="btn btn-primary" onClick={handleBuyNow}>
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
