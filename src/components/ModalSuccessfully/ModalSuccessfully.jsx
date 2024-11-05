import Modal from 'react-modal';
import style from './ModalSuccessfully.module.css';
import Icon from '../Icon/Icon';

Modal.setAppElement('#root');

const ModalSuccessfully = ({ isModalOpen, onCloseModal, card }) => {
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
          <h3 className={style.cardTitle}>
            Замовлення "{card.title}" прийнято
          </h3>
          <p className={style.cardMessage}>
            Дякуємо за ваше замовлення! Наш менеджер зв’яжеться з вами
            найближчим часом, щоб уточнити деталі.
          </p>
          <button className={style.btnConfirm} onClick={onCloseModal}>
            Добре
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSuccessfully;
