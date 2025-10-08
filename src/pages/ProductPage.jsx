import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCartStore } from '../store/useCartStore'; // 🛍️ Zustand giỏ hàng

// 🧠 Hàm format giá tiền VND
const formatPrice = (v) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);

const ProductPage = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  // 🛒 Hàm từ Zustand
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h2>Không tìm thấy sản phẩm 😢</h2>
        <p>
          Vui lòng quay lại <a href="/shop">Shop</a>
        </p>
      </div>
    );
  }

  return (
    <div className="product-page container">
      {/* Hình ảnh sản phẩm */}
      <div className="product-images">
        {product.images.map((img, idx) => (
          <img key={idx} src={img} alt={product.name} className="main-image" />
        ))}
      </div>

      {/* Thông tin chi tiết */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <div className="price">{formatPrice(product.price)}</div>
        <p className="description">{product.description}</p>

        {product.colors && (
          <div className="colors">
            <strong>Màu sắc: </strong>
            {product.colors.map((color, i) => (
              <span key={i} className="color-item">
                {color}
              </span>
            ))}
          </div>
        )}

        <div className="actions" style={{ marginTop: 16 }}>
          <button
            className="btn btn-primary"
            onClick={() => {
              addToCart(product);
              alert(`✅ Đã thêm "${product.name}" vào giỏ hàng!`);
            }}
          >
            🛒 Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
