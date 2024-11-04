import { useEffect } from 'react';
import Catalog from '../../components/Catalog/Catalog';
import DocTitle from '../../components/DocTitle';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import style from './HomePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/cards/operations';
import Loader from '../../components/Loader/Loader';
import { selectFilteredCards, selectLoading } from '../../redux/cards/selectors';
import CatalogCard from '../../components/CatalogCard/CatalogCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <main className={style.mainContainer}>
      <DocTitle>TataOvchinnikova</DocTitle>
      <h1 className={style.title}>Tata Catalog</h1>
      <FilterPanel />
      {loading ? (
        <Loader />
      ) : (
        <Catalog
          selector={selectFilteredCards}
          cardComponent={CatalogCard}
        />
      )}
    </main>
  );
};

export default HomePage;
