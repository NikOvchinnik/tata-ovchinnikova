import style from './CatalogCard.module.css';

const CatalogCard = ({ card }) => {
  return (
    <li>
      <div className={style.imgContainer}>
        <img
          src={card.images}
          alt={card.title}
          width="280"
          height="373"
          className={style.cardImg}
        />
        {card.isNew && (
          <div className={style.newContainer}>
            <p>NEW</p>
          </div>
        )}
        <button className={style.cardBtn}>Детальніше</button>
      </div>
      <div className={style.textContainer}>
        <h3>{card.title}</h3>
        <ul className={style.sizeList}>
          {card.sizes.map(size => (
            <li key={size} className={style.sizeItem}>
              {size}
            </li>
          ))}
        </ul>
        <p>{card.price} UAH</p>
      </div>
    </li>
  );
};

export default CatalogCard;
