import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from './context/CartContext'; // ✅ Thêm dòng này
import App from './App';
import './styles.css';

// ✅ Khởi tạo client cho TanStack Query
const queryClient = new QueryClient();

// ✅ Lấy phần tử gốc của ứng dụng
const container = document.getElementById('root');
const root = createRoot(container);

// ✅ Render toàn bộ app với các Provider bao quanh
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CartProvider>   {/* 🛒 Bọc toàn bộ app trong CartProvider */}
          <App />
        </CartProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
