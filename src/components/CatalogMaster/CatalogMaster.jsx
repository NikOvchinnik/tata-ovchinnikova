import { useState } from 'react';
import { selectMasterCards } from '../../redux/cards/selectors';
import CatalogCard from '../CatalogCard/CatalogCard';
import style from './CatalogMaster.module.css';
import { useSelector } from 'react-redux';

const CatalogMaster = () => {
  const catalogMaster = useSelector(selectMasterCards);

  const [visibleCount, setVisibleCount] = useState(16);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 16);
  };

  const visibleCards = catalogMaster.slice(0, visibleCount);

  return (
    <section>
      {catalogMaster.length ? (
        <>
          <ul className={style.catalogList}>
            {visibleCards.map(card => (
              <CatalogCard key={card.id} card={card} />
            ))}
          </ul>
          {visibleCount < catalogMaster.length && (
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

export default CatalogMaster;
