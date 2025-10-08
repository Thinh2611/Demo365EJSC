import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';


const formatPrice = (v) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Đặt hàng thành công!');
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>🛒 Giỏ hàng trống</h2>
        <p>Hãy quay lại <a href="/shop">Shop</a> để tiếp tục mua sắm nhé.</p>
      </div>
    );
  }

  return (
    <div className="checkout-container container">
      {/* Form thông tin giao hàng */}
      <div className="checkout-form">
        <h2>💳 Thông tin thanh toán</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Họ và tên</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Số điện thoại</label>
            <input type="tel" required />
          </div>

          <div className="form-group">
            <label>Địa chỉ giao hàng</label>
            <textarea required></textarea>
          </div>

          <div className="form-group">
            <label>Ghi chú (tuỳ chọn)</label>
            <textarea placeholder="Ghi chú cho đơn hàng..."></textarea>
          </div>

          <button type="submit" className="btn btn-primary full-width">
            ✅ Xác nhận thanh toán
          </button>
        </form>
      </div>

      {/* Tóm tắt đơn hàng */}
      <div className="checkout-summary">
        <h2>🧾 Tóm tắt đơn hàng</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="summary-item">
              <img src={item.images[0]} alt={item.name} />
              <div>
                <p className="name">{item.name}</p>
                <p className="price">
                  {item.quantity} × {formatPrice(item.price)}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="summary-total">
          <span>Tổng cộng:</span>
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
