import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

const formatPrice = (v) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);

const CartPage = () => {
  const navigate = useNavigate();
  const { items = [], removeFromCart, updateQuantity, clearCart } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container" style={{ padding: 40, textAlign: 'center' }}>
        <h2>🛒 Giỏ hàng trống</h2>
        <p>
          Hãy quay lại <Link to="/shop">cửa hàng</Link> để mua sắm nhé!
        </p>
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <h2>🛍️ Giỏ hàng của bạn</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tổng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="cart-item">
                <img
                  src={item.images?.[0] || '/assets/no-image.jpg'}
                  alt={item.name}
                  className="cart-thumb"
                />
                <span>{item.name}</span>
              </td>
              <td>{formatPrice(item.price)}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                />
              </td>
              <td>{formatPrice(item.price * item.quantity)}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                  title="Xóa sản phẩm"
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <h3>Tổng cộng: {formatPrice(total)}</h3>
        <div className="cart-actions">
          <button className="btn btn-outline" onClick={clearCart}>
            🧹 Xóa giỏ hàng
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/checkout')}>
            💳 Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
