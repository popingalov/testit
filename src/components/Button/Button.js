import s from './Button.module.scss';
import { ReactComponent as Arrow } from '../../materials/icons/arrow.svg';
export default function Button({ triger, children, type = 'button' }) {
  return (
    <button type={type} className={s.button}>
      {!triger && <Arrow />}
      {children || <p>Read More</p>}
    </button>
  );
}
