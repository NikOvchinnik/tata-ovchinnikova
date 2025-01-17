import { NavLink } from 'react-router-dom';
import style from './AppBar.module.css';
import Icon from '../Icon/Icon';
import { useState } from 'react';
import BurgerModal from '../BurgerModal/BurgerModal';

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <NavLink to="/">
          <img src="/logo.jpg" alt="logo" className={style.headerLogo} />
        </NavLink>
        <nav className={style.navContainer}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? style.navItemActive : style.navItem
            }
          >
            Каталог
          </NavLink>
          <NavLink
            to="/masterclass"
            className={({ isActive }) =>
              isActive ? style.navItemActive : style.navItem
            }
          >
            Майстер-класи
          </NavLink>
          <NavLink
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
        <div className={style.iconsContainer}>
          <a
            href="https://www.instagram.com/_tata_ovchinnikova/"
            className={style.iconsLink}
          >
            <Icon
              id="insta"
              width="18"
              height="18"
              className={style.iconsIcon}
            />
          </a>
          <a href="https://t.me/tata_ovchinnikova" className={style.iconsLink}>
            <Icon
              id="telegram"
              width="18"
              height="18"
              className={style.iconsSvg}
            />
          </a>
        </div>
        {isMenuOpen ? (
          <button onClick={closeMenu} type="button" className={style.btnClose}>
            <Icon id="x" width="20" height="20" className={style.instaIcon} />
          </button>
        ) : (
          <button onClick={openMenu} type="button" className={style.btnBurger}>
            <Icon id="menu" width="20" height="20" />
          </button>
        )}
      </div>
      <BurgerModal isModalOpen={isMenuOpen} onCloseModal={closeMenu} />
    </header>
  );
};

export default AppBar;
