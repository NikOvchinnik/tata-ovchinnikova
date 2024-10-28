import style from './Footer.module.css';
import Icon from '../Icon/Icon';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.adressContainer}>
          <p className={style.logoText}>TATA OVCHINNIKOVA</p>
          <ul className={style.adressList}>
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
              <a className={style.adressLink} href="mailto:tata@gmail.com<">
                tata@gmail.com
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
              <a className={style.privacyLink} href="">
                Оплата і доставка
              </a>
            </li>
            <li>
              <a className={style.privacyLink} href="">
                Політика конфіденційності
              </a>
            </li>
            <li>
              <a className={style.privacyLink} href="">
                Договір публічної оферти
              </a>
            </li>
          </ul>
        </div>
        <div className={style.logoFooterContainer}>
          <img
            className={style.logoFooter}
            src="/public/img/footer.jpg"
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
