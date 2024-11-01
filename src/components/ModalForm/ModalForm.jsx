import { useForm } from 'react-hook-form';
import style from './ModalForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Icon from '../Icon/Icon';
import { useId } from 'react';

const schemaYup = Yup.object().shape({
  name: Yup.string().required("*напишіть ваше ім'я"),
  phone: Yup.string().required("*напишіть ваш номер телефону"),
  messenger: Yup.string().required("*оберіть мессенджер для звязку"),
  comment: Yup.string(),
  publick: Yup.boolean().oneOf(
    [true],
    '*потрібно прийняти політику конфіденційності'
  ),
});

const defaultValues = {
  name: '',
  phone: '',
  messenger: 'telegram',
  comment: '',
  publick: false,
};

const ModalForm = ({ card, closeModalForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schemaYup),
  });

  const nameId = useId();
  const phoneId = useId();
  const messengerId = useId();
  const commentId = useId();
  const publickId = useId();

  const onSubmit = data => {
    console.log(card.title);
    console.log(data);
  };

  return (
    <div>
      <button className={style.btnBack} onClick={closeModalForm}>
        <Icon id="arrow-left" width="10" height="10" />
        Назад
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className={style.formContainer}>
        <div className={style.inputContainer}>
          <label htmlFor={nameId} className={style.labelContainer}>
            Ваше ім'я<span className={style.spanLabel}>*</span>
          </label>
          <input
            className={style.inputText}
            type="text"
            id={nameId}
            {...register('name')}
          />
          {errors.name && <p className={style.error}>{errors.name.message}</p>}
        </div>
        <div className={style.inputContainer}>
          <label htmlFor={phoneId} className={style.labelContainer}>
            Номер телефону<span className={style.spanLabel}>*</span>
          </label>
          <input
            className={style.inputText}
            type="tel"
            id={phoneId}
            {...register('phone')}
          />
          {errors.phone && (
            <p className={style.error}>{errors.phone.message}</p>
          )}
        </div>
        <div className={style.inputContainer}>
          <label htmlFor={messengerId} className={style.labelContainer}>
            Месенджер<span className={style.spanLabel}>*</span>
          </label>
          <select
            className={style.inputText}
            id={messengerId}
            {...register('messenger')}
          >
            <option value="telegram">Telegram</option>
            <option value="viber">Viber</option>
            <option value="whatsapp">Whatsapp</option>
            <option value="phone">Дзвінок на телефон</option>
            <option value="other">Інше(напишіть в коментарі)</option>
          </select>
          {errors.messenger && (
            <p className={style.error}>{errors.messenger.message}</p>
          )}
        </div>
        <div className={style.inputContainer}>
          <label htmlFor={commentId} className={style.labelContainer}>
            Коментар
          </label>
          <textarea
            className={style.inputText}
            id={commentId}
            {...register('comment')}
            rows="4"
            placeholder="Напишіть свій коментар..."
          ></textarea>
        </div>
        <div className={style.publickContainer}>
          <label htmlFor={publickId} className={style.publickLabel}>
            <input
              className={style.publickInput}
              id={publickId}
              type="checkbox"
              {...register('publick')}
            />
            ознайомлений з Політикою конфіденційності і Публічною офертою
          </label>
          {errors.publick && (
            <p className={style.error}>{errors.publick.message}</p>
          )}
        </div>
        <button type="submit" className={style.btnBuy}>
          Замовити
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
