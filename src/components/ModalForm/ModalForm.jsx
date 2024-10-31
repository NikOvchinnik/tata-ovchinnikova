import { useForm } from 'react-hook-form';
import style from './ModalForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schemaYup = Yup.object().shape({
  search: Yup.string(),
  category: Yup.string(),
});

const defaultValues = {
  search: '',
  category: 'Усі',
};

const ModalForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schemaYup),
  });

  const onSubmit = () => {};

  return (
    <div>
      <button>Назад</button>
      <form onSubmit={handleSubmit(onSubmit)} className={style.formContainer}>
        <div>
          <label htmlFor="">Ваше ім'я</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Номер телефону</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Мессенджер</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Коментар</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
