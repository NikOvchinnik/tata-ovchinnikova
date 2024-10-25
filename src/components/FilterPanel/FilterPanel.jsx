import style from './FilterPanel.module.css';

const FilterPanel = () => {
  return (
    <div className={style.filterContainer}>
      <ul className={style.filterList}>
        <li className={style.filterItem}>Нові</li>
        <li className={style.filterItem}>Жіночий одяг</li>
        <li className={style.filterItem}>Чоловічий одяг</li>
        <li className={style.filterItem}>Головні убори</li>
      </ul>
    </div>
  );
};

export default FilterPanel;
