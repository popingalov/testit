import List from './List';
import s from './team.module.scss';

export default function Team({ test }) {
  return (
    <section className={s.section}>
      <p className={s.p}>Who we are</p>
      <h2>Our Professional Team</h2>
      <p className={s.lorem}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <List test={test} />
    </section>
  );
}
