import { useState } from 'react';
import { selectFilteredCards } from '../../redux/cards/selectors';
import CatalogCard from '../CatalogCard/CatalogCard';
import style from './Catalog.module.css';
import { useSelector } from 'react-redux';

const Catalog = () => {
  const catalog = useSelector(selectFilteredCards);

  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };

  const visibleCards = catalog.slice(0, visibleCount);

  return (
    <section>
      {catalog.length ? (
        <>
          <ul className={style.catalogList}>
            {visibleCards.map(card => (
              <CatalogCard key={card.id} card={card} />
            ))}
          </ul>
          {visibleCount < catalog.length && (
            <button
              className={style.btnLoadMore}
              onClick={handleLoadMore}
              type="button"
            >
              Load more
            </button>
          )}
        </>
      ) : (
        <p>Не знайдено результатів за вибраними фільтрами</p>
      )}
    </section>
  );
};

export default Catalog;
