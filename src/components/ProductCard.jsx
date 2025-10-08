import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore'; // ✅ dùng Zustand

const formatPrice = (v) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart); // ✅ lấy hàm từ store
  const navigate = useNavigate();

  if (!product) return null;
  const imageSrc = product.images?.[0] || '/assets/no-image.png';

  const handleAddToCart = () => {
    addToCart(product);
    alert(`✅ Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="img-wrap">
        <img src={imageSrc} alt={product.name} loading="lazy" />
      </Link>

      <div className="meta">
        <h3 className="title">{product.name}</h3>
        <div className="price">{formatPrice(product.price)}</div>

        <div className="actions">
          <Link to={`/product/${product.id}`} className="btn">
            Xem
          </Link>

          <button className="btn btn-outline" onClick={handleAddToCart}>
            🛒 Thêm vào giỏ
          </button>

          <button className="btn btn-primary" onClick={handleBuyNow}>
            ⚡ Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
