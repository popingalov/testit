import { ReactComponent as LogoSvg } from '../../materials/icons/logo.svg';
const etst = {
  test: 'asd',
};
export default function Header() {
  return (
    <header>
      <p>
        <span>
          <LogoSvg /> Finance
        </span>
        Ledger
      </p>
    </header>
  );
}
