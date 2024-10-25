import { NavLink } from 'react-router-dom';
import style from './AppBar.module.css';
import Icon from '../Icon/Icon';

const AppBar = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <a href="/">
          <img
            src="/public/logo.jpg"
            alt="logo"
            width="150"
            height="18"
            className={style.headerLogo}
          />
        </a>
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
      </div>
    </header>
  );
};

export default AppBar;
