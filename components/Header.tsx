import Link from "next/link";

export const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <img src="/static/logo.svg" alt="logo" className="header__logo" />
      </Link>
      <Link href="/">
        <h1 className="headre__title">FishCastle</h1>
      </Link>
      <a
        className="header__summary snipcart-checkout snipcart-summary"
        href="#"
      >
        <span className="header__price snipcart-total-price"></span>
      </a>
    </header>
  );
};
