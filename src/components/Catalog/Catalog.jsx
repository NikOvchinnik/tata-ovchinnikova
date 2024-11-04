import { useState } from 'react';
import style from './Catalog.module.css';
import { useSelector } from 'react-redux';

const Catalog = ({ selector, cardComponent: CardComponent }) => {
  const catalog = useSelector(selector);

  const [visibleCount, setVisibleCount] = useState(16);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 16);
  };

  const visibleCards = catalog.slice(0, visibleCount);

  return (
    <section>
      {catalog.length ? (
        <>
          <ul className={style.catalogList}>
            {visibleCards.map(card => (
              <CardComponent key={card.id} card={card} />
            ))}
          </ul>
          {visibleCount < catalog.length && (
            <button
              className={style.btnLoadMore}
              onClick={handleLoadMore}
              type="button"
            >
              Показати ще
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
