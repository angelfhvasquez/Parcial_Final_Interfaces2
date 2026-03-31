import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>Sobre Juicy Lucy</h1>
          <p>Donde se crean las mejores hamburguesas de Lima</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <h2>Nuestra Historia</h2>
          <p>
            El lugar donde se crean las mejores hamburguesas de Lima, nuestra carne es un house blend de alta calidad con ingredientes frescos y recetas originales.
          </p>
          <p>
            Nuestras pasión, una buena burger que hará que tus problemas se vayan, porque no necesitamos nada más para ser felices.
          </p>
          <p>
            Cada hamburguesa es preparada con ingredientes de primera calidad, sin preservantes ni aditivos. Somos artesanos en la cocina, dedicados a crear la experiencia perfecta en cada bocado.
          </p>
        </div>
      </section>
    </div>
  );
}
