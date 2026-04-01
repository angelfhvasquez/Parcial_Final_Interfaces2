import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero({ title, subtitle, ctaText, ctaLink, backgroundImage }) {
  const heroBg = backgroundImage || 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1400&q=80';

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay" />
      <motion.div className="hero-content" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {ctaText && ctaLink && (
          <Link to={ctaLink} className="btn btn-primary">
            {ctaText}
          </Link>
        )}
      </motion.div>
    </section>
  );
}
