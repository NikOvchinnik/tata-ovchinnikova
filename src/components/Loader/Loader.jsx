import { ColorRing } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.loaderContainer}>
      <ColorRing
        visible={true}
        height="200"
        width="200"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#F2B2B2', '#EB7A7A', '#E44848', '#B33737', '#7A2626']}
      />
    </div>
  );
};

export default Loader;
