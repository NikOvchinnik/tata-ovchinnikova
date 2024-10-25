import { NavLink } from 'react-router-dom';
import style from './AppBar.module.css';

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
          <NavLink to="/">Каталог</NavLink>
          <NavLink to="/masterclass">Майстер-класи</NavLink>
          <NavLink to="/sale">Sale</NavLink>
          <NavLink to="/about">Про нас</NavLink>
        </nav>
        <address className={style.addressContainer}>
          <ul className={style.addressList}>
            <li>
              <a href="https://www.instagram.com/_tata_ovchinnikova/">
                _tata_ovchinnikova
              </a>
            </li>
            <li>
              <a href="tel:+380502803612">+380502803612</a>
            </li>
          </ul>
        </address>
      </div>
    </header>
  );
};

export default AppBar;
