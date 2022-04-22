import "./Header.css";

function Header({ image, title, children }) {
  return (
    <header className="Header">
      <img src={image} alt="img" />
      <section>
        <h1>{title}</h1>
        <p>{children}</p>
      </section>
    </header>
  );
}

export default Header;
