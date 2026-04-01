import { motion } from 'framer-motion';
import './Blog.css';

const blogPosts = [
  { id: 1, title: 'Cómo creamos nuestras hamburguesas', excerpt: 'Detrás de cada burger hay un proceso de sabor.', category: 'Proceso', date: '01 Abril 2026', href: '#' },
  { id: 2, title: 'Las mejores combinaciones del mes', excerpt: 'Combos irresistibles para todos los gustos.', category: 'Recomendaciones', date: '18 Marzo 2026', href: '#' },
  { id: 3, title: 'Eventos Juicy Nights', excerpt: 'Vive la noche de hamburguesas con música en vivo.', category: 'Eventos', date: '10 Marzo 2026', href: '#' },
];

export default function Blog() {
  return (
    <motion.section className="blog-page container" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <header className="blog-header"><h1>Blog</h1><p>Historias, consejos y novedades Juicy Lucy.</p></header>
      <div className="blog-grid">
        {blogPosts.map((post, i) => (
          <motion.article key={post.id} className="blog-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.08 }}>
            <div className="blog-meta"><span>{post.category}</span> · <span>{post.date}</span></div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href={post.href} className="read-more">Leer más →</a>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
