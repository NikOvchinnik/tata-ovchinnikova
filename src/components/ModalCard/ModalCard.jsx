import style from './ModalCard.module.css';

const ModalCard = ({ card, openModalForm }) => {
  return (
    <div className={style.cardContainer}>
      <p className={style.cardDescription}>{card.description}</p>
      <div className={style.listContainer}>
        <p className={style.titleListContainer}>Розміри:</p>
        <ul className={style.sizeList}>
          {card.sizes.map(size => (
            <li key={size} className={style.sizeItem}>
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.colorListContainer}>
        <div className={style.listContainer}>
          <p className={style.titleListContainer}>Колір:</p>
          <p>{card.colors.join(', ')}</p>
        </div>
        <p className={style.colorText}>
          *колір виробу можна підібрати індивідуально при замовлені
        </p>
      </div>
      <div className={style.listContainer}>
        <p className={style.titleListContainer}>Матеріал:</p>
        <p>{card.materials.join(', ')}</p>
      </div>
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
      <button onClick={openModalForm} className={style.btnBuy} type="button">
        Замовити
      </button>
      <p className={style.colorText}>
        *це попереднє замовлення. Наш менеджер зв’яжеться з вами для уточнення
        термінів виготовлення та підбору індивідуальних розмірів
      </p>
    </div>
  );
};

export default ModalCard;
