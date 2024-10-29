import Modal from 'react-modal';
import style from './ModalWindow.module.css';
import Icon from '../Icon/Icon';

Modal.setAppElement('#root');

const ModalWindow = ({ isModalOpen, onCloseModal, card }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={style.modalWindow}
      style={{
        overlay: {
          backgroundColor: 'rgba(47, 47, 47, 0.6)',
        },
      }}
    >
      <div className={style.modalContainer}>
        <button className={style.btnClose} onClick={onCloseModal} type="button">
          <Icon id="x" width="20" height="20" />
        </button>
        <div className={style.cardContainer}>
          <div className={style.imgContainer}>
            <img
              src={card.images}
              alt={card.title}
              className={style.cardImg}
            />
            {card.isNew && (
              <div className={style.newContainer}>
                <p>NEW</p>
              </div>
            )}
          </div>
          <div className={style.cardContent}>
            <h3 className={style.cardTitle}>{card.title}</h3>
            <p className={style.cardDescription}>{card.description}</p>
            <ul className={style.sizeList}>
              {card.sizes.map(size => (
                <li key={size} className={style.sizeItem}>
                  {size}
                </li>
              ))}
            </ul>
            <ul className={style.colorList}>
              {card.colors.map(color => (
                <li key={color} className={style.colorItem}>
                  {color}
                </li>
              ))}
            </ul>
            <ul className={style.materialList}>
              {card.materials.map(material => (
                <li key={material} className={style.materialItem}>
                  {material}
                </li>
              ))}
            </ul>
            <p className={style.cardStock}>
              {card.isInStock ? 'В наявності' : 'Немає в наявності'}
            </p>
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
            <button className={style.btnBuy} type="button">
              Замовити
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWindow;
