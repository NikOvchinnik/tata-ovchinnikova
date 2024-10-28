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
        <div>
          <h2>Hello</h2>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWindow;
