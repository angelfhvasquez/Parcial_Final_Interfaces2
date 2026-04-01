import { motion } from 'framer-motion';
import './About.css';

const benefits = [
  { title: 'Ingredientes locales y premium', text: 'Apoyamos productores peruanos con carne, vegetales y panes frescos todos los días.' },
  { title: 'Recetas creativas', text: 'Menú en constante evolución con sabores exclusivos y opciones vegetarianas/veganas.' },
  { title: 'Calidad con velocidad', text: 'Preparación rápida sin sacrificar sabor ni atención personalizada.' },
];

const team = [
  { role: 'Chef Ejecutivo', name: 'Camila Rojas', focus: 'Desarrollo de recetas y controles de calidad.' },
  { role: 'Gerente de Servicio', name: 'Diego Prado', focus: 'Experiencia en sala y atención al cliente.' },
  { role: 'Logística', name: 'Naomi Silva', focus: 'Coordinación de entregas y tiempos de despacho.' },
];

export default function About() {
  return (
    <motion.main className="about-page" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <section className="about-hero section-card">
        <div className="container">
          <h1>Conoce a Juicy Lucy</h1>
          <p>Somos pasión por las hamburguesas artesanales, sabor latino y servicio cercano.</p>
        </div>
      </section>

      <section className="about-story section-card">
        <div className="container">
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>Nuestra historia</motion.h2>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.08 }}>
            Desde 2022, un pequeño local en Miraflores se transformó en el punto de encuentro para amantes de la buena burger. Un equipo unido que busca sorprender en cada bocado.
          </motion.p>
        </div>
      </section>

      <section className="about-values container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }}>Valores que nos guían</motion.h2>
        <div className="values-grid">
          {benefits.map((item, idx) => (
            <motion.article className="value-card" key={item.title} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, delay: 0.15 + idx * 0.08 }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about-team section-card">
        <div className="container">
          <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 }}>Nuestro equipo</motion.h2>
          <motion.div className="team-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.2 }}>
            {team.map((person) => (
              <article key={person.name} className="team-card">
                <h4>{person.name}</h4>
                <strong>{person.role}</strong>
                <p>{person.focus}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="about-checklist container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.24 }}>Lo que puedes esperar</motion.h2>
        <motion.ul className="checklist" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.3 }}>
          <li>Ingredientes frescos y recetas revisadas semanalmente.</li>
          <li>Pedido rápido con empaques eco-friendly.</li>
          <li>Atención amable y sin esperas largas.</li>
          <li>Seguimiento de satisfacción post-venta.</li>
        </motion.ul>
      </section>
    </motion.main>
  );
}
