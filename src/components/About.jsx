import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              At Juicy Lucy, we believe that the best things in life are the simple pleasures. That's why we've dedicated ourselves to creating the most delicious, high-quality burgers in Lima.
            </p>
            <p>
              Our meat is a carefully crafted house blend using premium cuts and the freshest ingredients. Every burger is made with love, attention to detail, and a passion for perfection.
            </p>
            <p>
              More than just a burger joint, Juicy Lucy is a place where good food and good times come together. We're not just serving food; we're creating moments of happiness, one burger at a time.
            </p>
          </div>
          <div className="about-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🥩</div>
                <h3>Quality Ingredients</h3>
                <p>Premium, fresh ingredients in every burger</p>
              </div>
              <div className="value-item">
                <div className="value-icon">👨‍��</div>
                <h3>Crafted with Care</h3>
                <p>Every burger is made with passion and expertise</p>
              </div>
              <div className="value-item">
                <div className="value-icon">😋</div>
                <h3>Unforgettable Taste</h3>
                <p>Burgers so good, you'll be back for more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
