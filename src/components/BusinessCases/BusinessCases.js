import s from './businessCases.module.scss';

export default function BusinessCases({ test }) {
  return (
    <section id="cases" className={s.section}>
      <p>This is what we do</p>
      <h2>Business Cases</h2>
      <p className={s.lorem}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
    </section>
  );
}
