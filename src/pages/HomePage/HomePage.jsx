import { useEffect, useState } from 'react';
import Catalog from '../../components/Catalog/Catalog';
import DocTitle from '../../components/DocTitle';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import style from './HomePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/cards/operations';
import Loader from '../../components/Loader/Loader';
import {
  selectFilteredCards,
  selectLoading,
} from '../../redux/cards/selectors';
import CatalogCard from '../../components/CatalogCard/CatalogCard';
import Icon from '../../components/Icon/Icon';

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const [isSearchPanelOpen, setSearchPanelOpen] = useState(false);

  const toogleSearchPanel = () => {
    setSearchPanelOpen(prev => !prev);
  };

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <main className={style.mainContainer}>
      <DocTitle>TataOvchinnikova</DocTitle>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Tata Catalog</h1>
        <button onClick={toogleSearchPanel} className={style.searchBtn}>
          <Icon
            id="search"
            width="15"
            height="15"
            className={style.searchIcon}
          />
        </button>
      </div>
      <FilterPanel isSearchPanelOpen={isSearchPanelOpen} />
      {loading ? (
        <Loader />
      ) : (
        <Catalog selector={selectFilteredCards} cardComponent={CatalogCard} />
      )}
    </main>
  );
};

export default HomePage;
