import style from './Footer.module.css';
import Icon from '../Icon/Icon';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div>
          <p>Tata Ovchinnikova</p>
          <ul>
            <li>
              <a href="https://www.instagram.com/_tata_ovchinnikova/">
                <Icon
                  id="insta"
                  width="15"
                  height="15"
                  className={style.footerIcon}
                />
              </a>
            </li>
            <li>
              <a href="https://t.me/tata_ovchinnikova">
                <Icon
                  id="telegram"
                  width="15"
                  height="15"
                  className={style.footerIcon}
                />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="mailto:tata@gmail.com<">tata@gmail.com</a>
            </li>
            <li>
              <a href="tel:+380502803612">+380502803612</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Оплата і доставка</li>
            <li>Політика конфіденційності</li>
            <li>Договір публічної оферти</li>
          </ul>
        </div>
        <div>
          <img
            src="/public/img/footer.jpg"
            alt="footer logo"
            width="120"
            height="120"
          />
          <p>Розробник ... 2024@Усі права захищені</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
