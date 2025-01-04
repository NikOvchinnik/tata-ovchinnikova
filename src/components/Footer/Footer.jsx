import style from './Footer.module.css';
import Icon from '../Icon/Icon';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.adressContainer}>
          <p className={style.logoText}>TATA OVCHINNIKOVA</p>
          <ul className={style.adressIconsList}>
            <li>
              <a
                className={style.adressLink}
                href="https://www.instagram.com/_tata_ovchinnikova/"
              >
                <Icon
                  id="insta"
                  width="20"
                  height="20"
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
                  width="20"
                  height="20"
                  className={style.footerIcon}
                />
              </a>
            </li>
          </ul>
          <ul className={style.adressList}>
            <li>
              <a
                className={style.adressLink}
                href="mailto:mankovskaj@gmail.com<"
              >
                mankovskaj@gmail.com
              </a>
            </li>
            <li>
              <a className={style.adressLink} href="tel:+380502803612">
                +380502803612
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className={style.privacyList}>
            <li>
              <NavLink to="/delivery" className={style.privacyLink}>
                Оплата і доставка
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" className={style.privacyLink}>
                Політика конфіденційності
              </NavLink>
            </li>
            <li>
              <NavLink to="/public-contract" className={style.privacyLink}>
                Договір публічної оферти
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={style.logoFooterContainer}>
          <img
            className={style.logoFooter}
            src="/img/footer.jpg"
            alt="footer logo"
            width="90"
            height="67"
          />
          <p className={style.developerText}>
            @2024 NikOvchinnik Усі права захищені
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
