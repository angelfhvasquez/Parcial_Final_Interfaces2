import './MenuCard.css';

export default function MenuCard({ name, description, price, image }) {
  return (
    <div className="menu-card">
      <div className="menu-card-image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="placeholder">🍔</div>
        )}
      </div>
      <div className="menu-card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="menu-card-footer">
          <span className="price">S/ {price}</span>
        </div>
      </div>
    </div>
  );
}
