import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const formatPrice = (v) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', phone: '', address: '' });
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cảm ơn ${form.name}! Đơn hàng ${formatPrice(total)} đã được đặt.`);
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>Không có sản phẩm để thanh toán ❌</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>💳 Thanh toán</h2>
      <div className="checkout-layout">
        <div className="checkout-form">
          <h3>Thông tin giao hàng</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              required
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Địa chỉ giao hàng"
              required
              onChange={handleChange}
            />
            <button className="btn btn-primary" type="submit">
              Xác nhận đặt hàng
            </button>
          </form>
        </div>

        <div className="checkout-summary">
          <h3>Đơn hàng của bạn</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} × {item.quantity} → {formatPrice(item.price * item.quantity)}
              </li>
            ))}
          </ul>
          <hr />
          <h4>Tổng cộng: {formatPrice(total)}</h4>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
