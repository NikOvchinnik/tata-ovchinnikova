import Modal from 'react-modal';
import style from './ModalWindow.module.css';
import Icon from '../Icon/Icon';
import ModalCard from '../ModalCard/ModalCard';
import ModalForm from '../ModalForm/ModalForm';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useState } from 'react';

Modal.setAppElement('#root');

const ModalWindow = ({
  isModalOpen,
  onCloseModal,
  onOpenModalSuccessfully,
  card,
}) => {
  const [isModalFormOpen, setModalFormIsOpen] = useState(false);

  const openModalForm = () => {
    setModalFormIsOpen(true);
  };

  const closeModalForm = () => {
    setModalFormIsOpen(false);
  };

  const galleryImages = card.images.map(url => ({
    original: url,
    originalAlt: card.title,
  }));

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      shouldFocusAfterRender={false}
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
        <Scrollbars style={{ width: 860, height: '75vh' }}>
          <div className={style.cardContainer}>
            <div className={style.imgContainer}>
              <ImageGallery items={galleryImages} />
              {card.isNew && (
                <div className={style.newContainer}>
                  <p>NEW</p>
                </div>
              )}
            </div>
            <div className={style.cardContent}>
              <h3 className={style.cardTitle}>{card.title}</h3>
              {isModalFormOpen ? (
                <ModalForm
                  card={card}
                  closeModalForm={closeModalForm}
                  closeModalWindow={onCloseModal}
                  openModalSuccessfully={onOpenModalSuccessfully}
                />
              ) : (
                <ModalCard card={card} openModalForm={openModalForm} />
              )}
            </div>
          </div>
        </Scrollbars>
      </div>
    </Modal>
  );
};

export default ModalWindow;
