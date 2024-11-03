import { useState } from 'react';
import CatalogSaleCard from '../CatalogSaleCard/CatalogSaleCard';
import style from './CatalogSale.module.css';
import { useSelector } from 'react-redux';
import { selectSaleCards } from '../../redux/cards/selectors';

const CatalogSale = () => {
  const catalogSale = useSelector(selectSaleCards);

  const [visibleCount, setVisibleCount] = useState(16);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 16);
  };

  const visibleCards = catalogSale.slice(0, visibleCount);

  return (
    <section>
      {catalogSale.length ? (
        <>
          <ul className={style.catalogSaleList}>
            {visibleCards.map(card => (
              <CatalogSaleCard key={card.id} card={card} />
            ))}
          </ul>
          {visibleCount < catalogSale.length && (
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

export default CatalogSale;
