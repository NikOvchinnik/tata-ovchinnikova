import DocTitle from '../../components/DocTitle';
import style from './SalePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/cards/operations';
import Loader from '../../components/Loader/Loader';
import { selectLoading, selectSaleCards } from '../../redux/cards/selectors';
import { useEffect } from 'react';
import Catalog from '../../components/Catalog/Catalog';
import SaleCard from '../../components/SaleCard/SaleCard';

const SalePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <main className={style.mainContainer}>
      <DocTitle>Sale</DocTitle>
      <h2 className={style.title}>Sale</h2>
      {loading ? (
        <Loader />
      ) : (
        <Catalog selector={selectSaleCards} cardComponent={SaleCard} />
      )}
    </main>
  );
};

export default SalePage;
