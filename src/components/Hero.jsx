import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {ctaText && ctaLink && (
          <Link to={ctaLink} className="btn">
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
