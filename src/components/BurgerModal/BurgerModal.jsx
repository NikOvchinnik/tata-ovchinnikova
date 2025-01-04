import Modal from 'react-modal';
import style from './BurgerModal.module.css';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';

Modal.setAppElement('#root');

const BurgerModal = ({ isModalOpen, onCloseModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={style.modalWindow}
    >
      <div className={style.modalContainer}>
        <nav className={style.navContainer}>
          <NavLink
            onClick={onCloseModal}
            to="/"
            className={({ isActive }) =>
              isActive ? style.navItemActive : style.navItem
            }
          >
            Каталог
          </NavLink>
          <NavLink
            onClick={onCloseModal}
            to="/masterclass"
            className={({ isActive }) =>
              isActive ? style.navItemActive : style.navItem
            }
          >
            Майстер-класи
          </NavLink>
          <NavLink
            onClick={onCloseModal}
            to="/sale"
            className={({ isActive }) =>
              isActive
                ? `${style.navItemActive} ${style.navItemSale}`
                : `${style.navItem} ${style.navItemSale}`
            }
          >
            Sale
          </NavLink>
          <NavLink
            onClick={onCloseModal}
            to="/about"
            className={({ isActive }) =>
              isActive ? style.navItemActive : style.navItem
            }
          >
            Про нас
          </NavLink>
        </nav>
        <address className={style.addressContainer}>
          <ul className={style.addressList}>
            <li className={style.addressItem}>
              <a
                href="https://www.instagram.com/_tata_ovchinnikova/"
                className={style.adressLink}
              >
                <Icon
                  id="insta"
                  width="15"
                  height="15"
                  className={style.instaIcon}
                />
                _tata_ovchinnikova
              </a>
            </li>
            <li className={style.addressItem}>
              <a href="tel:+380502803612" className={style.adressLink}>
                +380502803612
              </a>
            </li>
          </ul>
        </address>
      </div>
    </Modal>
  );
};
export default BurgerModal;
