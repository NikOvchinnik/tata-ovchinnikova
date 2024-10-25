import Catalog from '../../components/Catalog/Catalog';
import DocTitle from '../../components/DocTitle';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={style.mainContainer}>
      <DocTitle>TataOvchinnikova</DocTitle>
      <h1 className={style.title}>Tata Catalog</h1>
      <FilterPanel />
      <Catalog />
    </main>
  );
};

export default HomePage;
