import style from './CatalogCard.module.css';

const CatalogCard = ({ card }) => {
  return (
    <li className={style.cardContainer}>
      <div className={style.imgContainer}>
        <img
          src={card.images}
          alt={card.title}
          width="320"
          height="426"
          className={style.cardImg}
        />
        {card.isNew && (
          <div className={style.newContainer}>
            <p>NEW</p>
          </div>
        )}
        {/* {card.isNew && (
          <div className={style.stockContainer}>
            <p>в наявності</p>
          </div>
        )} */}
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
        <div className={style.priceCard}>
          {card.isSale ? (
            <>
              <p className={style.priceText}>{card.salePrice} UAH</p>
              <p className={style.salePriceText}>{card.price} UAH</p>
            </>
          ) : (
            <p className={style.priceText}>{card.price} UAH</p>
          )}
        </div>
        <button className={style.btnBuy}>Замовити</button>
      </div>
    </li>
  );
};

export default CatalogCard;
