import style from './ModalCard.module.css';

const ModalCard = ({ card, openModalForm }) => {
  return (
    <div className={style.cardContainer}>
      {card.description &&
        <p className={style.cardDescription}>{card.description}</p>
      }
      {card.sizes && (
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
      )}
      {card.colors && (
        <div className={style.colorListContainer}>
          <div className={style.listContainer}>
            <p className={style.titleListContainer}>Колір:</p>
            <p>{card.colors.join(', ')}</p>
          </div>
          <p className={style.colorText}>
            *колір виробу можна підібрати індивідуально при замовлені
          </p>
        </div>
      )}
      {card.materials && (
        <div className={style.listContainer}>
          <p className={style.titleListContainer}>Матеріал:</p>
          <p>{card.materials.join(', ')}</p>
        </div>
      )}
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
      <div className={style.textContainer}>
        
        <p className={style.colorText}>
          *це попереднє замовлення. Наш менеджер зв’яжеться з вами для уточнення
          термінів виготовлення та підбору індивідуальних розмірів
        </p>
        <p className={style.colorText}>
          **ціна вказана за розмір M на моделі, ціна може дещо змінюватись в
          залежності від розміру і обраного вами матеріалу
        </p>
      </div>
    </div>
  );
};

export default ModalCard;
