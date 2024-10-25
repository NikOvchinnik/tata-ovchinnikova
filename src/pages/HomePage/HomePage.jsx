import Catalog from '../../components/Catalog/Catalog';
import DocTitle from '../../components/DocTitle';
import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={style.mainContainer}>
      <DocTitle>TataOvchinnikova</DocTitle>
      <Catalog />
    </main>
  );
};

export default HomePage;
