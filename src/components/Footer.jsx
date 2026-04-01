import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-block">
          <h3>JUICY LUCY</h3>
          <p>Hamburguesas artesanales hechas con técnica, sabor y tradición.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="WhatsApp">💬</a>
          </div>
        </div>

        <div className="footer-block">
          <h3>Enlaces rápidos</h3>
          <Link to="/">Inicio</Link>
          <Link to="/menu">Menú</Link>
          <Link to="/about">Nosotros</Link>
          <Link to="/contact">Contacto</Link>
        </div>

        <div className="footer-block">
          <h3>Contacto</h3>
          <span>📍 Lima, Perú</span>
          <span>📞 +51 1 234 5678</span>
          <span>⏰ 11:00 - 23:00</span>
        </div>

        <div className="footer-block">
          <h3>Suscríbete</h3>
          <p>Recibe ofertas y novedades premium.</p>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('¡Suscripción confirmada!'); e.currentTarget.reset(); }}>
            <input type="email" placeholder="Tu correo" required />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">&copy; {currentYear} Juicy Lucy. Todos los derechos reservados.</div>
    </footer>
  );
}
