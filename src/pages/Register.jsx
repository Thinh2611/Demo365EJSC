import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    localStorage.setItem('user', JSON.stringify(form));
    alert('Đăng ký thành công 🎉');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Tên đăng nhập"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">Đăng ký</button>
      </form>
      <p>
        Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
      </p>
    </div>
  );
};

export default Register;
