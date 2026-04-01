import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import './Header.css';

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Menú', path: '/menu' },
  { label: 'Blog', path: '/blog' },
  { label: 'Nosotros', path: '/about' },
  { label: 'Contacto', path: '/contact' },
];

export default function Header() {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const { user, logout } = useAuth();

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">JUICY LUCY</Link>
        <div className="right-actions">
          <nav className="nav">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`nav-link ${isActive(item.path)}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="auth-group">
            {user ? (
              <>
                <span className="welcome">Hola, {user.name}</span>
                <button className="logout-btn" onClick={logout}>Cerrar sesión</button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link auth">Iniciar sesión</Link>
                <Link to="/register" className="nav-link auth">Registrarse</Link>
              </>
            )}
            <Link to="/cart" className="cart-link">🛒{getTotalItems() > 0 && <span className="cart-count">{getTotalItems()}</span>}</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
