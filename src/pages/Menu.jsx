import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MenuCard from '../components/MenuCard';
import './Menu.css';

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image" />
      <div className="skeleton-content">
        <div className="skeleton-line short" />
        <div className="skeleton-line" />
        <div className="skeleton-line" />
        <div className="skeleton-footer">
          <div className="skeleton-price" />
          <div className="skeleton-btn" />
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [term, setTerm] = useState('');
  const [category, setCategory] = useState('todos');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [menu, setMenu] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const itemsPerPage = 4;

  const categories = useMemo(() => {
    const setCategories = new Set(['todos']);
    menu.forEach((item) => item.tags?.forEach((tag) => setCategories.add(tag.toLowerCase())));
    return Array.from(setCategories);
  }, [menu]);

  useEffect(() => {
    let alive = true;

    const fetchMenu = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}menu.json`);
        if (!response.ok) throw new Error('No se puede cargar el menú');
        const data = await response.json();
        if (alive) {
          setMenu(data);
          setLoading(false);
        }
      } catch (err) {
        if (alive) {
          setError(err.message || 'Error de conexión');
          setLoading(false);
        }
      }
    };

    fetchMenu();
    return () => {
      alive = false;
    };
  }, []);

  const [sortBy, setSortBy] = useState('relevance');

  const filtered = useMemo(() => {
    const lowerTerm = term.toLowerCase();
    return menu.filter((item) => {
      const matchesTerm = item.name.toLowerCase().includes(lowerTerm) || item.description.toLowerCase().includes(lowerTerm);
      const matchesCategory = category === 'todos' || item.tags.some((tag) => tag.toLowerCase() === category);
      return matchesTerm && matchesCategory;
    });
  }, [term, category, menu]);

  const sortedFiltered = useMemo(() => {
    if (sortBy === 'price-asc') {
      return [...filtered].sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (sortBy === 'price-desc') {
      return [...filtered].sort((a, b) => Number(b.price) - Number(a.price));
    }
    return filtered;
  }, [filtered, sortBy]);

  const suggestions = useMemo(() => {
    return menu
      .filter((item) => item.tags.some((tag) => ['top', 'best seller', 'popular'].includes(tag.toLowerCase())))
      .slice(0, 4);
  }, [menu]);

  const totalCount = sortedFiltered.length;
  const visibleItems = sortedFiltered.slice(0, visibleCount);
  const hasMore = visibleCount < totalCount;

  useEffect(() => {
    setVisibleCount(itemsPerPage);
  }, [term, category]);

  useEffect(() => {
    if (loading || error || !hasMore) return;

    const handleScroll = () => {
      const threshold = 280;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - threshold) {
        setVisibleCount((prev) => Math.min(prev + itemsPerPage, totalCount));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, error, hasMore, totalCount]);

  return (
    <motion.div className="menu-page" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <section className="menu-hero section-card">
        <div className="container">
          <h1>Menú Premium</h1>
          <p>Elige tu favorita entre nuestras hamburguesas de autor.</p>

          <div className="menu-filters">
            <motion.div className="search-wrapper" whileFocus={{ scale: 1.01 }}>
              <span className="search-icon">🔍</span>
              <input
                type="search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Buscar por nombre, descripción o ingrediente"
                aria-label="Buscar menú"
              />
              {term && (
                <button type="button" className="clear-btn" onClick={() => setTerm('')}>
                  ✕
                </button>
              )}
            </motion.div>

            <motion.select value={category} onChange={(e) => setCategory(e.target.value)} whileTap={{ scale: 0.99 }}>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.toUpperCase()}
                </option>
              ))}
            </motion.select>

            <motion.select value={sortBy} onChange={(e) => setSortBy(e.target.value)} whileTap={{ scale: 0.99 }}>
              <option value="relevance">Relevancia</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
            </motion.select>

            <button type="button" className="btn btn-secondary" onClick={() => { setCategory('todos'); setTerm(''); setSortBy('relevance'); }}>
              Limpiar filtros
            </button>
          </div>

          {!loading && !error && (
            <p className="result-count">{totalCount} resultados para "{term || 'todos'}" - categoría: {category.toUpperCase()}.</p>
          )}
        </div>

        {!loading && !error && suggestions.length > 0 && (
          <div className="suggestion-section">
            <h3>Recomendado del Chef</h3>
            <div className="suggestion-grid">
              {suggestions.map((item) => (
                <article key={item.id} className="suggestion-card">
                  <img src={item.image} alt={item.name} loading="lazy" onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80')} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <span className="suggestion-price">S/ {item.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="menu-section">
        <div className="container menu-grid">
          {loading && Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={`skeleton-${idx}`} />)}
          {!loading && error && <p className="error-message">{error}. Intenta recargar la página.</p>}
          {!loading && !error && filtered.length === 0 && <p className="no-results">No encontramos items para tu búsqueda.</p>}
          {!loading && !error && visibleItems.map((burger, idx) => (
            <motion.div key={burger.id} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.06 }}>
              <MenuCard {...burger} />
            </motion.div>
          ))}
        </div>

        {!loading && !error && hasMore && (
          <div className="pagination">
            <button className="page-btn" onClick={() => setVisibleCount((prev) => Math.min(prev + itemsPerPage, totalCount))}>
              Cargar más
            </button>
          </div>
        )}

        {!loading && !error && !hasMore && totalCount > 0 && (
          <p className="no-results">Ya estás viendo todas las hamburguesas.</p>
        )}
      </section>
    </motion.div>
  );
}
