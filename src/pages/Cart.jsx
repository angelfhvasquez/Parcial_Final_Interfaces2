import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import './Cart.css';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, summary, clearCart } = useCart();
  const totalItems = useMemo(() => cart.reduce((a, c) => a + c.quantity, 0), [cart]);

  if (!cart.length) {
    return (
      <motion.section className="cart container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1>Tu carrito está vacío</h1>
        <p>Agrega algún producto desde el menú y comienza a disfrutar.</p>
      </motion.section>
    );
  }

  return (
    <motion.section className="cart container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1>Tu carrito ({totalItems})</h1>
      <div className="cart-items">
        {cart.map((item, index) => (
          <motion.article key={item.id} className="cart-item" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.08 }}>
            <div className="cart-item-image">{item.image ? <img src={item.image} alt={item.name} /> : <div className="placeholder">🍔</div>}</div>
            <div className="cart-item-details"><h3>{item.name}</h3><p>{item.description}</p>
              <div className="cart-item-controls">
                <div className="quantity-controls"><button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button></div>
                <span className="price">S/ {(item.price * item.quantity).toFixed(2)}</span>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div className="cart-total" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 }}>
        <h2>Subtotal: S/ {summary.subtotal.toFixed(2)}</h2>
        <p>Impuestos (12%): S/ {summary.taxes.toFixed(2)}</p>
        <p>Delivery: S/ {summary.delivery.toFixed(2)}</p>
        <h3>Total: S/ {summary.total.toFixed(2)}</h3>
        <div className="cart-actions">
          <button className="checkout-btn" onClick={() => alert('Pago simulado recibido. Gracias!')}>Pagar ahora</button>
          <button className="btn btn-secondary" onClick={clearCart}>Vaciar carrito</button>
        </div>
      </motion.div>
    </motion.section>
  );
}
