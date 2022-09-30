import s from './footer.module.scss';
import { ReactComponent as Link } from '../../materials/icons/link.svg';
import { ReactComponent as Tube } from '../../materials/icons/tube.svg';
import { ReactComponent as Twit } from '../../materials/icons/twit.svg';
import { ReactComponent as Fase } from '../../materials/icons/fase.svg';
export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.link}>
        <Link />
        <Tube />
        <Twit />
        <Fase />
      </div>
      <p>Copyright © 2021 - FinanceLedger</p>
    </footer>
  );
}
