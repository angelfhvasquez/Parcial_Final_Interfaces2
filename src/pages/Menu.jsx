import MenuCard from '../components/MenuCard';
import './Menu.css';

const allBurgers = [
  { id: 1, name: 'BLT', description: 'Bacon, lechuga y tomate con nuestra carne premium', price: '45' },
  { id: 2, name: 'Clásica', description: 'La hamburguesa clásica con carne artesanal de alta calidad', price: '42' },
  { id: 3, name: 'Doble Queso', description: 'Doble carne con queso derretido, es impresionante', price: '50' },
  { id: 4, name: 'Especial Juicy', description: 'Carne premium, bacon, queso y salsa especial', price: '55' },
  { id: 5, name: 'Burger Vegana', description: 'Para los amantes de lo saludable sin perder sabor', price: '40' },
  { id: 6, name: 'Picante Lucy', description: 'Jalapeños, habanero y salsa picante', price: '48' },
  { id: 7, name: 'Champiñones', description: 'Champiñones salteados con carne premium', price: '52' },
  { id: 8, name: 'Criolla', description: 'Cebolla criolla, carne y tomate fresco', price: '44' },
  { id: 9, name: 'Huevo Frito', description: 'Carne premium con huevo frito en la parte superior', price: '49' },
  { id: 10, name: 'Doble Bacon', description: 'Doble bacon, queso y carne premium', price: '54' },
  { id: 11, name: 'Lucy Premium', description: 'La máxima expresión del sabor Juicy Lucy', price: '58' },
  { id: 12, name: 'Burger Mix', description: 'Mezcla de sabores con queso, bacon y verduras', price: '51' },
];

export default function Menu() {
  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="container">
          <h1>Nuestro Menú</h1>
          <p>Descubre todas nuestras deliciosas hamburguesas artesanales</p>
        </div>
      </section>

      <section className="menu-section">
        <div className="container">
          <h2>Nuestras Hamburguesas</h2>
          <div className="menu-grid">
            {allBurgers.map((burger) => (
              <MenuCard key={burger.id} {...burger} />
            ))}
          </div>
        </div>
      </section>

      <section className="menu-cta">
        <div className="container">
          <h2>¿Ya te decidiste?</h2>
          <p>Haz tu pedido ahora por Rappi o Pedidos Ya</p>
          <a href="https://www.rappi.com.pe/restaurantes/delivery/5158-juicy-lucy-hamburguesas" target="_blank" rel="noopener noreferrer" className="btn-order">
            Ordenar Ahora
          </a>
        </div>
      </section>
    </div>
  );
}
