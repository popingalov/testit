import s from './spiner.module.css';
import loader from '../../materials/images/gallery/loading.gif';

export default function Spiner() {
  return <img className={s.spin} src={loader} alt="loading" />;
}
