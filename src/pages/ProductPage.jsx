import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import Loading from '../components/Loading';

const formatPrice = (v) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchProductById(id)
      .then((res) => mounted && setProduct(res.data))
      .catch((err) => console.error(err))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, [id]);

  if (loading) return <Loading />;
  if (!product) return <div style={{ padding: 40 }}>Không tìm thấy sản phẩm</div>;

  return (
    <div className="container product-page">
      <div className="product-layout">
        <div className="gallery">
          <img src={product.images[0]} alt={product.name} />
        </div>
        <div className="details">
          <h1>{product.name}</h1>
          <div className="price">{formatPrice(product.price)}</div>
          <p className="desc">{product.description}</p>
          <div className="choices">
            <label>Màu:</label>
            <div className="colors">
              {product.colors.map((c) => (
                <button key={c} className="chip">{c}</button>
              ))}
            </div>
          </div>
          <div className="product-actions">
            <button className="btn btn-primary">Thêm vào giỏ</button>
            <Link to="/shop" className="btn btn-outline">Tiếp tục mua</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
