import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const formatPrice = (v) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>🛒 Giỏ hàng của bạn trống</h2>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: '20px' }}>
          Tiếp tục mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>🛒 Giỏ hàng</h2>
      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.images[0]} alt={item.name} />
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>{formatPrice(item.price)}</p>
              <p>Số lượng: {item.quantity}</p>
            </div>
            <button
              className="btn btn-outline"
              onClick={() => removeFromCart(item.id)}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Tổng cộng: {formatPrice(total)}</h3>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/checkout')}
        >
          Tiến hành thanh toán
        </button>
      </div>
    </div>
  );
};

export default CartPage;
