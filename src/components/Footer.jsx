import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>JUICY LUCY</h3>
            <p>Las mejores hamburguesas artesanales de Lima</p>
          </div>
          <div className="footer-section">
            <h3>Enlaces</h3>
            <Link to="/">Inicio</Link>
            <Link to="/menu">Menú</Link>
            <Link to="/about">Nosotros</Link>
            <Link to="/contact">Contacto</Link>
          </div>
          <div className="footer-section">
            <h3>Horarios</h3>
            <p>Lunes a Domingo</p>
            <p>11:00 AM - 11:00 PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Juicy Lucy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
