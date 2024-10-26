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
        colors={['#4c4c4c', '#666666', '#7f7f7f', '#999999', '#b2b2b2']}
      />
    </div>
  );
};

export default Loader;
