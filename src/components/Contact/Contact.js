import Form from 'components/Form';
import s from './contact.module.scss';

export default function Contact({ test }) {
  const testOnClass = test ? `${s.bg} ${s.webp}` : `${s.bg} ${s.noWebp}`;
  return (
    <section id="contact" className={s.contact}>
      <div className={testOnClass}></div>
      <div className={s.content}>
        <h2>Request Callback</h2>
        <Form />
      </div>
    </section>
  );
}
