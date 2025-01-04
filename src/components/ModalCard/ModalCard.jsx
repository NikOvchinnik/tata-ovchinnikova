import Icon from '../Icon/Icon';
import style from './ModalCard.module.css';

const ModalCard = ({ card, openModalForm }) => {
  return (
    <div className={style.cardContainer}>
      {card.description && (
        <p className={style.cardDescription}>{card.description}</p>
      )}
      {card.category === 'Майстер-клас' ? (
        <>
          {card.level && (
            <div className={style.listContainer}>
              <p className={style.titleListContainer}>Складність:</p>
              {[...Array(5)].map((_, index) => (
                <Icon
                  key={index}
                  id={index < card.level ? 'star' : 'star-outline'}
                  width="20"
                  height="20"
                  className={style.iconLevel}
                />
              ))}
            </div>
          )}
          {card.tool && (
            <div className={style.listContainer}>
              <p className={style.titleListContainer}>Інструмент:</p>
              <p>{card.tool}</p>
            </div>
          )}
        </>
      ) : card.category === 'Наявність' ? (
        <>
          {card.saleSizes && (
            <div className={style.listContainer}>
              <p className={style.titleListContainer}>Розміри в наявності:</p>
              <ul className={style.sizeList}>
                {card.saleSizes.map(size => (
                  <li key={size} className={style.sizeItem}>
                    {size}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {card.colors && (
            <div className={style.listContainer}>
              <p className={style.titleListContainer}>Кольори в наявності:</p>
              <p>{card.colors.join(', ')}</p>
            </div>
          )}
        </>
      ) : (
        card.colors && (
          <div className={style.colorListContainer}>
            <div className={style.listContainer}>
              <p className={style.titleListContainer}>Колір на моделі:</p>
              <p>{card.colors.join(', ')}</p>
            </div>
            <p className={style.colorText}>
              *колір виробу можна підібрати індивідуально при замовлені
            </p>
          </div>
        )
      )}
      {card.materials && (
        <div className={style.listContainer}>
          <p className={style.titleListContainer}>Матеріал:</p>
          <p>{card.materials.join(', ')}</p>
        </div>
      )}
      {card.tableSize ? (
        <div>
          <table className={style.sizeTable}>
            <thead>
              <tr>
                <th>Розмір</th>
                <th>Ширина</th>
                <th>Довжина</th>
                <th>Довжина рукава</th>
              </tr>
            </thead>
            <tbody>
              {card.tableSize.map((sizeItem, index) => (
                <tr key={index}>
                  <td>{sizeItem.size}</td>
                  <td>{sizeItem.width}</td>
                  <td>{sizeItem.length}</td>
                  <td>{sizeItem.sleeveLength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : card.sizes ? (
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
      ) : null}
      <div className={style.priceCard}>
        {card.isSale ? (
          <>
            <p className={style.priceText}>{card.salePrice} ₴</p>
            <p className={style.salePriceText}>{card.price} ₴</p>
          </>
        ) : (
          <p className={style.priceText}>{card.price} ₴</p>
        )}
      </div>
      <button onClick={openModalForm} className={style.btnBuy} type="button">
        Оформити замовлення
      </button>
      <div className={style.textContainer}>
        {card.category === 'Майстер-клас' ? (
          <p className={style.colorText}>
            *після оформлення замовлення ми з вами звяжемось, щоб уточнити
            деталі і надати реквізити на оплату
          </p>
        ) : card.category === 'Наявність' ? (
          <p className={style.colorText}>
            *після оформлення замовлення ми з вами звяжемось, щоб уточнити
            деталі і надати реквізити на оплату
          </p>
        ) : (
          <>
            <p className={style.colorText}>
              *це попереднє замовлення. Ми зв’яжемось з вами для уточнення
              термінів виготовлення та підбору індивідуальних розмірів
            </p>
            <p className={style.colorText}>
              **ціна вказана за розмір M, ціна може змінюватись від розміру і
              обраного вами матеріалу
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalCard;
