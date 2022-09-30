import Modal from 'components/Modal';
import { useState } from 'react';
import foto from '../../materials/images/cases';
import s from './style.module.scss';

export default function Galery({ test }) {
  const { jpgFormat, jpgFormat2x, webpFormat, webpFormat2x } = foto;
  const [url, setUrl] = useState(false);
  const [triger, setTriger] = useState(false);
  const [format, setFormat] = useState();
  const [index, setIndex] = useState();

  function returnUrl(ev, idx) {
    const startUrl = ev.target.currentSrc;
    const helper = startUrl.match(/stat/).index - 1;
    const targetUrl = startUrl.substr(helper);
    setIndex(idx);
    if (!format) {
      setUrl(targetUrl);
      takeFormat(startUrl);
      toggle();
      return;
    }
    setUrl(format[idx]);
    toggle();
  }

  function takeFormat(str) {
    const testOnRet = str.includes('@2');
    if (testOnRet && test) {
      setFormat(webpFormat2x);
      return;
    }
    if (!testOnRet && test) {
      setFormat(webpFormat);
      return;
    }
    if (testOnRet && !test) {
      setFormat(jpgFormat2x);
      return;
    }
    if (testOnRet && !test) {
      setFormat(jpgFormat2x);
      return;
    }
    setFormat(jpgFormat);
  }

  function toggle() {
    setTriger(!triger);
  }

  function nextFoto(triger) {
    const length = format.length - 1;

    if (triger) {
      if (index === length) {
        setUrl(format.at(0));
        setIndex(0);
        return;
      }
      setUrl(format.at(index + 1));
      setIndex(prev => (prev += 1));
      return;
    }
    if (index === 0) {
      setUrl(format[length]);
      setIndex(length);
      return;
    }
    setUrl(format.at(index - 1));
    setIndex(prev => (prev -= 1));
  }
  return (
    <section>
      {triger && (
        <Modal
          obj={{ index, length: jpgFormat.length }}
          toggle={toggle}
          nextFoto={nextFoto}
          url={url}
        />
      )}
      <h2 className={s.h2}>Foto</h2>
      <ul className={s.fotoZone}>
        {jpgFormat.map((el, idx) => {
          const stringUrlWebp = `${webpFormat[idx]} 1x, ${webpFormat2x[idx]} 2x`;
          const stringUrlJpg = `${el} 1x, ${jpgFormat2x[idx]} 2x`;
          return (
            <li onClick={ev => returnUrl(ev, idx)} key={el}>
              <picture>
                {test && <source type="image/webp" srcSet={stringUrlWebp} />}
                <source type="image/jpeg" srcSet={stringUrlJpg} />
                <img src={el} alt={`Foto ${idx}`} />
              </picture>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
