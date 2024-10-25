import DocTitle from '../../components/DocTitle';
import style from './MasterPage.module.css';

const MasterPage = () => {
  return (
    <main className={style.mainContainer}>
      <DocTitle>Master Class</DocTitle>
      <h2 className={style.title}>Master Class</h2>
    </main>
  );
};

export default MasterPage;
