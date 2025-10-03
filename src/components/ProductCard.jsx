import React from 'react';
import { Link } from 'react-router-dom';

const formatPrice = (v) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="img-wrap">
        <img src={product.images[0]} alt={product.name} />
      </Link>
      <div className="meta">
        <h3 className="title">{product.name}</h3>
        <div className="price">{formatPrice(product.price)}</div>
        <div className="actions">
          <Link to={`/product/${product.id}`} className="btn">View</Link>
          <button className="btn btn-outline">Add</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
