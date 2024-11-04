import style from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={style.aboutSection}>
      <div className={style.textContainer}>
        <h2 className={style.title}>Про бренд і людей</h2>
        <p className={style.textAbout}>
          Вітаю! Мене звуть Наталія, і я є засновницею бренду Tata Ovchinnikova.
          Уже понад п'ять років я створюю вироби ручної роботи, які народжуються
          з моєї любові до мистецтва і бажання дарувати людям тепло та комфорт.
        </p>
        <p className={style.textAbout}>
          Я з Харкова, і моя майстерня — це місце, де кожен виріб проходить
          ретельний процес відбору матеріалів, дизайну та виготовлення. Кожен
          етап я виконую з душею, щоб кожна річ від Tata Ovchinnikova стала для
          вас особливою.
        </p>
        <p className={style.textAbout}>
          Для мене Tata Ovchinnikova — це не просто бренд, а відображення моїх
          цінностей: любові до своєї справи, якості та уваги до деталей.
          Сподіваюся, що кожен мій виріб принесе вам радість і додасть затишку у
          ваше життя.
        </p>
      </div>
      <div className={style.photoContainer}></div>
    </section>
  );
};

export default AboutSection;
