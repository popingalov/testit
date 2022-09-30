import s from './form.module.scss';
import { ReactComponent as Warning } from '../../materials/images/form/worning.svg';
import { useState } from 'react';
import Button from 'components/Button';
export default function Form() {
  const [email, setEmail] = useState('');
  const [name, setname] = useState('');
  const [triger, seTriger] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'name':
        return setname(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEmail('');
    setname('');
    seTriger(false);
  };
  function setCustomValidity(e) {
    e.preventDefault();
    seTriger(true);
  }

  return (
    <form onSubmit={handleSubmit} className={s.uiForm}>
      <div className={s.formRow}>
        <input
          className={s.input}
          type="name"
          name="name"
          // required
          value={name}
          onChange={handleChange}
        />
        <label className={s.label} htmlFor="name">
          Enter name
        </label>
      </div>
      <div className={s.formRow}>
        <input
          className={s.input}
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          onInvalid={setCustomValidity}
        />
        <label className={s.label} htmlFor="email">
          Enter email email
        </label>
        {triger && (
          <div className={s.warning}>
            This is a required field <Warning />
          </div>
        )}
      </div>
      <Button type="sumbit" triger>
        <p>Send</p>
      </Button>
    </form>
  );
}
