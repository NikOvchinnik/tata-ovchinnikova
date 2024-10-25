import DocTitle from '../../components/DocTitle';
import style from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <main className={style.mainContainer}>
      <DocTitle>About</DocTitle>
      <h2 className={style.title}>About Us</h2>
    </main>
  );
};

export default AboutPage;
