import Modal from 'react-modal';
import style from './ModalSuccessfully.module.css';
import Icon from '../Icon/Icon';
import { useEffect } from 'react';

Modal.setAppElement('#root');

const ModalSuccessfully = ({ isModalOpen, onCloseModal, card }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add(style.modalOpen);
    } else {
      document.body.classList.remove(style.modalOpen);
    }
  }, [isModalOpen]);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={false}
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
            Замовлення "{card.title}" прийнято!
          </h3>
          <p className={style.cardMessage}>
            Дякуємо за ваше замовлення! Ми вже працюємо над ним та найближчим
            часом зв’яжемось з вами, щоб уточнити деталі.
          </p>
          <div className={style.contactsContainer}>
            <p className={style.cardMessage}>
              Якщо у вас є питання або побажання, звертайтесь до наc:
            </p>
            <ul className={style.contactsList}>
              <li>
                <a
                  className={style.adressLink}
                  href="https://www.instagram.com/_tata_ovchinnikova/"
                >
                  <Icon
                    id="insta"
                    className={style.footerIcon}
                  />
                </a>
              </li>
              <li>
                <a
                  className={style.adressLink}
                  href="https://t.me/tata_ovchinnikova"
                >
                  <Icon
                    id="telegram"
                    className={style.footerIcon}
                  />
                </a>
              </li>
              <li>
                <a className={style.adressLink} href="tel:+380502803612">
                  +380502803612
                </a>
              </li>
            </ul>
          </div>
          <button className={style.btnConfirm} onClick={onCloseModal}>
            Добре
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSuccessfully;
