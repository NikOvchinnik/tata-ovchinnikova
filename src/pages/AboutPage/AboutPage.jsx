import AboutSection from '../../components/AboutSection/AboutSection';
import DocTitle from '../../components/DocTitle';
import style from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <main className={style.mainContainer}>
      <DocTitle>About</DocTitle>
      <AboutSection/>
    </main>
  );
};

export default AboutPage;
