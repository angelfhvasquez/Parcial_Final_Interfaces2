import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback(`Gracias ${form.name}, recibimos tu mensaje. Responderemos en breve.`);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <motion.div className="contact-page" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <section className="contact-hero section-card">
        <div className="container">
          <h1>Contacto</h1>
          <p>¿Tienes una consulta, sugerencia o necesitas ayuda con tu pedido? Escríbenos y te responderemos pronto.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          <motion.form className="contact-form form-panel" onSubmit={handleSubmit} initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
            <h2>Envíanos un mensaje</h2>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" required />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Mensaje" rows="5" required />
            <button type="submit" className="btn btn-primary">Enviar mensaje</button>
            {feedback && <p className="success-message">{feedback}</p>}
          </motion.form>

          <motion.aside className="contact-details form-panel" initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
            <h2>Detalles de contacto</h2>
            <p>Siempre que quieras, estamos listos para atenderte con reserva o delivery.</p>
            <div className="info-card">
              <h3>Dirección</h3>
              <p>Av. Principal 123, Miraflores, Lima, Perú</p>
            </div>
            <div className="info-card">
              <h3>Teléfono</h3>
              <p>+51 1 234 5678</p>
            </div>
            <div className="info-card">
              <h3>Horario</h3>
              <p>Lunes a Domingo: 11:00 - 23:00</p>
            </div>
            <div className="info-card">
              <h3>Email</h3>
              <p>contacto@juicylucy.pe</p>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="map-section section-card">
        <div className="container">
          <h2>Encuéntranos aquí</h2>
          <div className="map-card">
            <iframe title="Ubicación Juicy Lucy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8138538812985!2d-77.03151568480036!3d-12.115332642419554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c86f9f3e4f0f%3A0x1a897025c66c0610!2sMiraflores%2C%20Lima%2C%20Per%C3%BA!5e0!3m2!1ses!2sus!4v1680373935742!5m2!1ses!2sus" width="100%" height="320" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      <section className="faq-section section-card">
        <div className="container">
          <h2>Preguntas frecuentes</h2>
          <div className="faq-grid">
            <article>
              <h4>¿Hacen delivery?</h4>
              <p>Sí, trabajamos con Rappi y PedidosYa. También recogida en tienda.</p>
            </article>
            <article>
              <h4>¿Tienen opción vegana?</h4>
              <p>Claro, tenemos varias burgers veganas y opciones sin gluten.</p>
            </article>
            <article>
              <h4>¿Aceptan reservas?</h4>
              <p>¡Sí! Reserva por redes sociales o al teléfono en horarios de atención.</p>
            </article>
            <article>
              <h4>¿Puedo pagar con tarjetas?</h4>
              <p>Aceptamos tarjetas y pagos electrónicos en tienda y en delivery.</p>
            </article>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
