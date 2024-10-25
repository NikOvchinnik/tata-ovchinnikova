import style from './CatalogCard.module.css';

const CatalogCard = ({ card }) => {
  return (
    <li className={style.cardContainer}>
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
      </div>
      <div className={style.textContainer}>
        <h3 className={style.titleCard}>{card.title}</h3>
        <ul className={style.sizeList}>
          {card.sizes.map(size => (
            <li key={size} className={style.sizeItem}>
              {size}
            </li>
          ))}
        </ul>
        <p className={style.priceCard}>{card.price} UAH</p>
        <button className={style.btnBuy}>Замовити</button>
      </div>
    </li>
  );
};

export default CatalogCard;
