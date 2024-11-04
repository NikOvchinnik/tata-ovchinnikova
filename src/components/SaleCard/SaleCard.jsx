import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import style from './SaleCard.module.css';

const SaleCard = ({ card }) => {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
        {card.isInStock && (
          <div className={style.stockContainer}>
            <p>в наявності</p>
            <ul className={style.sizeList}>
              {card.sizes.map(size => (
                <li key={size} className={style.sizeItem}>
                  {size}
                </li>
              ))}
            </ul>
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
        <button onClick={openModal} className={style.btnBuy} type="button">
          Замовити
        </button>
      </div>
      <ModalWindow
        isModalOpen={isModalOpen}
        onCloseModal={closeModal}
        card={card}
      />
    </li>
  );
};

export default SaleCard;
