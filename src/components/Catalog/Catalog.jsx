import CatalogCard from '../CatalogCard/CatalogCard';
import catalog from '../../catalog.json';
import style from './Catalog.module.css';

const Catalog = () => {
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
