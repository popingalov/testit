import s from './form.module.scss';
import { ReactComponent as Warning } from '../../materials/images/form/worning.svg';
import { useState } from 'react';
import Button from 'components/Button';
export default function Form() {
  const [email, setEmail] = useState('');
  const [name, setname] = useState('');
  const [triger, seTriger] = useState('');
  const [triger2, seTriger2] = useState('');

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
    seTriger2(false);
  };
  function setCustomValidity(e) {
    e.preventDefault();
    const { name } = e.target;
    console.log(e.target.name);
    if (name === 'email') {
      seTriger2(true);

      return;
    }
    seTriger(true);
  }

  return (
    <form onSubmit={handleSubmit} className={s.uiForm}>
      <div className={s.formRow}>
        <input
          className={s.input}
          type="name"
          name="name"
          required
          onInvalid={setCustomValidity}
          value={name}
          onChange={handleChange}
        />
        <label className={s.label} htmlFor="name">
          Enter name
        </label>
        {triger && (
          <div className={s.warning2}>
            This is a required field <Warning />
          </div>
        )}
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
        {triger2 && (
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
