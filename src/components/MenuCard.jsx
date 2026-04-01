import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import './MenuCard.css';

export default function MenuCard({ id, name, description, price, image, tags = [] }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, description, price: Number(price), image });
  };

  const fallbackImage = 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80';

  return (
    <motion.article className="menu-card" whileHover={{ y: -8 }} whileTap={{ scale: 0.98 }}>
      <div className="menu-card-image">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackImage;
            }}
          />
        ) : (
          <div className="placeholder">🍔</div>
        )}
      </div>
      <div className="menu-card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="tag-row">{tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
        <div className="menu-card-footer">
          <span className="price">S/ {price}</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      </div>
    </motion.article>
  );
}
