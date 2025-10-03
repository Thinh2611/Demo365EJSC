import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser &&
        savedUser.username === form.username &&
        savedUser.password === form.password) {
      localStorage.setItem('loggedInUser', form.username);
      alert('Đăng nhập thành công ✅');
      navigate('/');
    } else {
      alert('Sai tên đăng nhập hoặc mật khẩu ❌');
    }
  };

  return (
    <div className="auth-container">
      <h2>Đăng nhập</h2>
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
        <button type="submit" className="btn btn-primary">Đăng nhập</button>
      </form>
      <p>
        Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
      </p>
    </div>
  );
};

export default Login;
