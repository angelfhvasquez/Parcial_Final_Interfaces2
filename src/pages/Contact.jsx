import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contacto</h1>
          <p>Ponte en contacto con nosotros</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-info">
            <h2>Información de Contacto</h2>
            <div className="info-item">
              <h3>📍 Ubicación</h3>
              <p>Lima, Perú</p>
            </div>
            <div className="info-item">
              <h3>⏰ Horario</h3>
              <p>Lunes a Domingo: 11:00 AM - 11:00 PM</p>
            </div>
            <div className="info-item">
              <h3>📞 Teléfono</h3>
              <p>+51 1 234 5678</p>
            </div>
            <div className="info-item">
              <h3>📱 Redes Sociales</h3>
              <p>Síguenos en nuestras redes</p>
            </div>
          </div>

          <div className="contact-order">
            <h2>Haz tu Pedido</h2>
            <p>Pide ahora a través de nuestros partners de delivery</p>
            <div className="order-buttons">
              <a href="https://www.rappi.com.pe/restaurantes/delivery/5158-juicy-lucy-hamburguesas" target="_blank" rel="noopener noreferrer" className="btn-delivery rappi">
                <span>Pedir por Rappi</span>
              </a>
              <a href="#" className="btn-delivery pedidos-ya">
                <span>Pedir por Pedidos Ya</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
