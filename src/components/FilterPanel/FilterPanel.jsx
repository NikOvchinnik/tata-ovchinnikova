import { useForm } from 'react-hook-form';
import style from './FilterPanel.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { changeFilters } from '../../redux/filters/slice';
import { useDispatch } from 'react-redux';

const schemaYup = Yup.object().shape({
  search: Yup.string(),
  category: Yup.string().oneOf([
    'Нові',
    'Жіночий одяг',
    'Чоловічий одяг',
    'Головні убори',
  ]),
});

const FilterPanel = () => {
  const dispatch = useDispatch();

  const defaultValues = {
    search: '',
    category: 'Усі',
  };

  const { register, watch } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schemaYup),
  });

  const searchValue = watch('search');
  const categoryValue = watch('category');

  useEffect(() => {
    dispatch(
      changeFilters({
        search: searchValue,
        category: categoryValue,
      })
    );
  }, [searchValue, categoryValue, dispatch]);

  return (
    <form className={style.formContainer}>
      <div className={style.categoryContainer}>
        <ul className={style.categoryList}>
          <li className={style.categoryItem}>
            <label>
              <input
                className={style.categoryInput}
                type="radio"
                value="Усі"
                {...register('category')}
              />
              Усі
            </label>
          </li>
          <li className={style.categoryItem}>
            <label>
              <input
                className={style.categoryInput}
                type="radio"
                value="Нові"
                {...register('category')}
              />
              Нові
            </label>
          </li>
          <li className={style.categoryItem}>
            <label>
              <input
                className={style.categoryInput}
                type="radio"
                value="Жіночий одяг"
                {...register('category')}
              />
              Жіночий одяг
            </label>
          </li>
          <li className={style.categoryItem}>
            <label>
              <input
                className={style.categoryInput}
                type="radio"
                value="Чоловічий одяг"
                {...register('category')}
              />
              Чоловічий одяг
            </label>
          </li>
          <li className={style.categoryItem}>
            <label>
              <input
                className={style.categoryInput}
                type="radio"
                value="Дитячий одяг"
                {...register('category')}
              />
              Дитячий одяг
            </label>
          </li>
          <li className={style.categoryItem}>
            <label>
              <input
                className={style.categoryInput}
                type="radio"
                value="Головні убори"
                {...register('category')}
              />
              Головні убори
            </label>
          </li>
        </ul>
      </div>
      <div className={style.searchContainer}>
        <label>Пошук</label>
        <input
          className={style.searchInput}
          type="text"
          placeholder="назва моделі"
          {...register('search')}
        />
      </div>
    </form>
  );
};

export default FilterPanel;
