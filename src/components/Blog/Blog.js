import Button from 'components/Button';
import s from './blog.module.scss';

export default function Blog({ test }) {
  const testOnClass = test ? `${s.bg} ${s.webp}` : `${s.bg} ${s.noWebp}`;
  return (
    <section id="blog" className={s.section}>
      <div className={testOnClass}></div>
      <div className={s.blog}>
        <p className={s.p}>April 16 2020</p>
        <h2>Blog Post One</h2>
        <p className={s.lorem}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <Button triger>
          <p>Read Our Blog</p>
        </Button>
      </div>
    </section>
  );
}
