import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import style from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={style.headerContainer}>
      <nav className={style.navContainer}>
        <NavLink to="/">
          <div className={style.logoContainer}>
            <Icon id="alcove" width="30" height="30" />
            <p>RentCamper</p>
          </div>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? style.navLinkActive : style.navLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? style.navLinkActive : style.navLink
          }
        >
          Catalog
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? style.navLinkActive : style.navLink
          }
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
