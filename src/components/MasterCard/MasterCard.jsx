import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import style from './MasterCard.module.css';

const MasterCard = ({ card }) => {
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
      </div>
      <div className={style.textContainer}>
        <p className={style.textCard}>
          Майстер<span className={style.spanCard}>-</span>клас
        </p>
        <h3 className={style.titleCard}>{card.title}</h3>
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

export default MasterCard;
