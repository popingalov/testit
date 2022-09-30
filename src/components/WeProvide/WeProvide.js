import Button from 'components/Button';
import s from './style.module.scss';

export default function WeProvide({ test }) {
  const testOnClass = test
    ? `${s.people} ${s.webp}`
    : `${s.people} ${s.noWebp}`;
  return (
    <section id="about" className={s.provide}>
      <div className={testOnClass}></div>
      <p className={s.first}>What you are looking for</p>
      <h2>We provide bespoke solutions</h2>
      <p className={s.lorem}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
        ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
        illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste
        maiores deleniti?
      </p>
      <Button triger />
    </section>
  );
}
