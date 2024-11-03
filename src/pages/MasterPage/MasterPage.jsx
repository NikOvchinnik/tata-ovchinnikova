import DocTitle from '../../components/DocTitle';
import style from './MasterPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/cards/operations';
import Loader from '../../components/Loader/Loader';
import { selectLoading } from '../../redux/cards/selectors';
import { useEffect } from 'react';
import CatalogMaster from '../../components/CatalogMaster/CatalogMaster';

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
      {loading ? <Loader /> : <CatalogMaster />}
    </main>
  );
};

export default MasterPage;
