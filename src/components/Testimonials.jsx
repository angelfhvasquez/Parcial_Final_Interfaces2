import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  { id: 1, name: 'María', role: 'Food Lover', text: 'Cada burger tiene un impacto de sabor único. Las mejores de Lima.' },
  { id: 2, name: 'Kevin', role: 'Delivery fan', text: 'Servicio rápido, embalaje impecable y temperatura perfecta al llegar.' },
  { id: 3, name: 'Sofía', role: 'Veggie first', text: 'La Burger Vegana me volvió a la vida. Es deliciosa y generosa.' },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Clientes felices</h2>
        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <motion.article key={item.id} className="testimonial-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.15 }}>
              <p>“{item.text}”</p>
              <div className="testimonial-meta">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
