import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const formatPrice = (v) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // 🛠 Nếu product hoặc images chưa có thì không render lỗi
  if (!product) return null;

  const imageSrc = product.images?.[0] || '/assets/no-image.png';

  // ✅ Thêm vào giỏ hàng (không chuyển trang)
  const handleAddToCart = () => {
    addToCart(product);
    alert(`✅ Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  // ✅ Mua ngay → thêm sản phẩm & chuyển trang giỏ hàng
  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-card">
      {/* Ảnh sản phẩm */}
      <Link to={`/product/${product.id}`} className="img-wrap">
        <img src={imageSrc} alt={product.name} loading="lazy" />
      </Link>

      {/* Thông tin sản phẩm */}
      <div className="meta">
        <h3 className="title">{product.name}</h3>
        <div className="price">{formatPrice(product.price)}</div>

        {/* Các nút hành động */}
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
