import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import MenuCard from '../components/MenuCard';
import Testimonials from '../components/Testimonials';
import './Home.css';

const menuItems = [
  { id: 1, name: 'BLT Supreme', description: 'Bacon, lechuga y tomate + salsa secreta.', price: '49', tags: ['New', 'Top'], image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80' },
  { id: 2, name: 'Lucy Clásica', description: 'Carne premium, doble queso cheddar.', price: '42', tags: ['Best seller'], image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=80' },
  { id: 3, name: 'Doble Queso', description: 'Doble carne para los más hambrientos.', price: '54', tags: ['Popular'], image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80' },
  { id: 4, name: 'Veggie Lovers', description: 'Portobello, hummus y aguacate.', price: '41', tags: ['Vegana'] },
];

export default function Home() {
  const specials = useMemo(() => menuItems.slice(0, 3), []);

  return (
    <motion.div className="home" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
      <Hero
        title="El verdadero sabor Juicy Lucy"
        subtitle="Hamburguesas artesanales con ingredientes locales, recetas únicas y servicio exprés."
        ctaText="Ver Menú"
        ctaLink="/menu"
        backgroundImage="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1680&q=80"
      />

      <section className="highlight-section">
        <div className="container">
          <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>Favoritas de la semana</motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>Elige entre nuestras opciones más pedidas por clientes reales.</motion.p>
          <motion.div className="highlight-grid" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
            {specials.map((burger) => (
              <motion.div key={burger.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <MenuCard {...burger} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section className="about-quick" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}>
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <div className="why-grid">
            <article className="why-card"><h3>Ingredientes frescos</h3><p>Desde la parrilla al plato en menos de 15 minutos.</p></article>
            <article className="why-card"><h3>Recetas exclusivas</h3><p>Sabores creados por chefs y probados por más de 3,000 fans.</p></article>
            <article className="why-card"><h3>Entrega rápida</h3><p>Con aliados logísticos top para que tu pedido llegue perfecto.</p></article>
          </div>
        </div>
      </motion.section>

      <Testimonials />

      <motion.section className="cta-section" initial={{ scale: 0.98, y: 8, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.12 }}>
        <div className="container">
          <h2>Listo para tu burger?</h2>
          <p>Un clic te separa de la mejor experiencia de hamburguesa en Lima.</p>
          <a className="btn btn-primary" href="/menu">Ordenar ahora</a>
        </div>
      </motion.section>
    </motion.div>
  );
}
