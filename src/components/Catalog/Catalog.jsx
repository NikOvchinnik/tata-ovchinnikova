import { selectCards } from '../../redux/cards/selectors';
import CatalogCard from '../CatalogCard/CatalogCard';
import style from './Catalog.module.css';
import { useSelector } from 'react-redux';

const Catalog = () => {
  const catalog = useSelector(selectCards);

  return (
    <section>
      <ul className={style.catalogList}>
        {catalog.map(card => (
          <CatalogCard key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
