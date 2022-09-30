import s from './Hero.module.scss';

export default function Hero({ test, children }) {
  const [header, button] = children;
  const testOnClass = test ? `${s.hero} ${s.webp}` : `${s.hero} ${s.noWebp}`;
  return (
    <section className={testOnClass}>
      {header}
      <div className={s.gr}>
        <p className={s.bigText}>The Sky Is The Limit</p>
        <h1>We provide world class financial assistance</h1>
        {button}
      </div>
    </section>
  );
}
