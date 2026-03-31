import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            JUICY LUCY
          </Link>
          <nav className="nav">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              INICIO
            </Link>
            <Link to="/menu" className={`nav-link ${isActive('/menu')}`}>
              MENU
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>
              NOSOTROS
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
              CONTACTO
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
