import { Link } from 'react-router-dom';
import MenuCard from '../components/MenuCard';
import './Home.css';

const featuredBurgers = [
  { id: 1, name: 'BLT', description: 'Bacon, lechuga y tomate', price: '45' },
  { id: 2, name: 'Clásica', description: 'Carne premium artesanal', price: '42' },
  { id: 3, name: 'Doble Queso', description: 'Doble carne y queso', price: '50' },
  { id: 4, name: 'Especial Lucy', description: 'Nuestra especialidad premium', price: '55' },
  { id: 5, name: 'Vegana', description: 'Deliciosa opción saludable', price: '40' },
  { id: 6, name: 'Picante', description: 'Con jalapeño y habanero', price: '48' },
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero-slider">
        <img 
          src="https://s3.amazonaws.com/orion-eat-app-files/orioneat-prod%2FcjopnJHMNuJo7RQsY-Burger-Sliders.jpg" 
          alt="Juicy Lucy Burgers"
          className="hero-image"
        />
      </section>

      <section className="featured-section">
        <div className="container">
          <h2>¡Las más pedidas, nuestras mejores burgers!</h2>
          <div className="featured-grid">
            {featuredBurgers.map((burger) => (
              <MenuCard key={burger.id} {...burger} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>¿Listo para tu burger?</h2>
          <p>Pide ahora exclusivamente por Rappi y disfruta de un sabor de otro mundo.</p>
          <a href="https://www.rappi.com.pe/restaurantes/delivery/5158-juicy-lucy-hamburguesas" target="_blank" rel="noopener noreferrer" className="btn-rappi">
            Ir a Rappi
          </a>
        </div>
      </section>

      <section className="warning-section">
        <div className="container">
          <h2>⚠️ Warning!</h2>
          <p>¡Si te quedas más de 5 minutos en esta web, no podrás resistirte!</p>
        </div>
      </section>
    </div>
  );
}
