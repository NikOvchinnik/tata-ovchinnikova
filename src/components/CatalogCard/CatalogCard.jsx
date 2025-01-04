import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import style from './CatalogCard.module.css';
import ModalSuccessfully from '../ModalSuccessfully/ModalSuccessfully';

const CatalogCard = ({ card }) => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [isModalSuccessfullyOpen, setModalSuccessfullyIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModalSuccessfully = () => {
    setModalSuccessfullyIsOpen(true);
  };

  const closeModalSuccessfully = () => {
    setModalSuccessfullyIsOpen(false);
  };

  return (
    <li className={style.cardContainer}>
      <div className={style.imgContainer} onClick={openModal}>
        <img
          src={card.images[0]}
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
        <h3 className={style.titleCard}>{card.title}</h3>
        {card.category === 'Майстер-клас' ? (
          <p className={style.textMaster}>
            Майстер<span className={style.spanMaster}>-</span>клас
          </p>
        ) : card.category === 'Наявність' ? (
          <div className={style.stockContainer}>
            <p>в наявності</p>
            <ul className={style.stockList}>
              {card.saleSizes.map(size => (
                <li key={size} className={style.sizeItem}>
                  {size}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className={style.sizeList}>
            {card.sizes.map(size => (
              <li key={size} className={style.sizeItem}>
                {size}
              </li>
            ))}
          </ul>
        )}
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
        <button onClick={openModal} className={style.btnBuy} type="button">
          Замовити
        </button>
      </div>
      <ModalWindow
        isModalOpen={isModalOpen}
        onCloseModal={closeModal}
        onOpenModalSuccessfully={openModalSuccessfully}
        card={card}
      />
      <ModalSuccessfully
        isModalOpen={isModalSuccessfullyOpen}
        onCloseModal={closeModalSuccessfully}
        card={card}
      />
    </li>
  );
};

export default CatalogCard;
