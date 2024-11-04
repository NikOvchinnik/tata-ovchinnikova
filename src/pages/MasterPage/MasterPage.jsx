import DocTitle from '../../components/DocTitle';
import style from './MasterPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/cards/operations';
import Loader from '../../components/Loader/Loader';
import { selectLoading, selectMasterCards } from '../../redux/cards/selectors';
import { useEffect } from 'react';
import Catalog from '../../components/Catalog/Catalog';
import MasterCard from '../../components/MasterCard/MasterCard';

const MasterPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <main className={style.mainContainer}>
      <DocTitle>Master Class</DocTitle>
      <h2 className={style.title}>Master Class</h2>
      {loading ? (
        <Loader />
      ) : (
        <Catalog selector={selectMasterCards} cardComponent={MasterCard} />
      )}
    </main>
  );
};

export default MasterPage;
