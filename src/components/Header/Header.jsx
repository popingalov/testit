import { useEffect, useRef, useState } from 'react';
import { ReactComponent as LogoSvg } from '../../materials/icons/logo.svg';
import s from './Header.module.scss';
import Nav from './Nav';
import debounce from 'lodash.debounce';
export default function Header() {
  const [name, setName] = useState(s.header);
  const opTri = useRef(false);

  useEffect(() => {
    window.addEventListener('scroll', trackScroll);
    console.log('scrolled');
    return () => {
      window.removeEventListener('scroll', trackScroll);
    };
  }, []);

  function trackScroll() {
    const scrolled = window.pageYOffset;

    if (scrolled > 120 && !opTri.current) {
      const deb = debounce(() => {
        opTri.current = true;
        setName(s.opacity);
        setTimeout(() => {
          setName(s.scroll);
        }, 250);
      });
      deb();
      return;
    }

    if (scrolled < 120 && opTri.current) {
      const test = debounce(() => {
        setName(s.header);

        opTri.current = false;
      }, 200);
      test();
    }
  }
  return (
    <>
      {opTri.current && <div id="home" className={s.block}></div>}
      <header className={name}>
        <p className={s.logo}>
          <LogoSvg className={s.icon} />
          <span className={s.finance}>Finance</span>
          <span> Ledger</span>
        </p>
        <Nav triger={opTri} />
      </header>
    </>
  );
}
