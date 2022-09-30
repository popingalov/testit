import s from './nav.module.scss';

export default function Nav({ triger }) {
  let helper = triger.current ? s.list : s.wrap;

  function scrollOnClick(e) {
    e.preventDefault();
    const sclorlTo = e.target.innerText.toLowerCase();
    document
      .getElementById(sclorlTo)
      .scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  return (
    <nav>
      <ul className={helper}>
        <li>
          <a onClick={scrollOnClick}>Home</a>
        </li>
        <li>
          <a onClick={scrollOnClick}>About</a>
        </li>
        <li>
          <a onClick={scrollOnClick}>Cases</a>
        </li>
        <li>
          <a onClick={scrollOnClick}>Blog</a>
        </li>
        <li>
          <a onClick={scrollOnClick}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
