import s from './list.module.scss';
import foto from '../../../materials/images/team';
import { ReactComponent as Fase } from '../../../materials/icons/fase.svg';
import { ReactComponent as Link } from '../../../materials/icons/link.svg';
import { ReactComponent as Tube } from '../../../materials/icons/tube.svg';
import { ReactComponent as Twit } from '../../../materials/icons/twit.svg';
const persone = [
  { name: 'John Doe', role: 'President' },
  { name: 'Jane Doe', role: 'Vice President' },
  { name: 'Steve Smith', role: 'Marketing Head' },
];
export default function List({ test }) {
  const { jpgFormat, jpgFormat2x, webpFormat, webpFormat2x } = foto;
  return (
    <ul className={s.fotoZone}>
      {jpgFormat.map((el, idx) => {
        const stringUrlWebp = `${webpFormat[idx]} 1x, ${webpFormat2x[idx]} 2x`;
        const stringUrlJpg = `${el} 1x, ${jpgFormat2x[idx]} 2x`;
        return (
          <li key={el}>
            <div className={`${s.position} ${s.li}`}>
              <picture>
                {test && <source type="image/webp" srcSet={stringUrlWebp} />}
                <source type="image/jpeg" srcSet={stringUrlJpg} />
                <img src={el} alt={`Foto ${idx}`} />
              </picture>
              <div className={s.pBlock}>
                <Fase className={s.soc} />
                <Link className={s.soc} />
                <Tube className={s.soc} />
                <Twit className={s.soc} />
              </div>
            </div>
            <div className={s.info}>
              <p>{persone[idx].name}</p>
              <p>{persone[idx].role}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
