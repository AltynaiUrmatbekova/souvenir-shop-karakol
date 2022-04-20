import "./Nav.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <nav className="Nav">
      <Logo />
      <div className="container">
        <Logo />
    <ul>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/products"> Product</NavItem>
        <NavItem url="/contacts">Contact</NavItem>
      </ul>
    </div>
    </nav>
  );
}

export default Nav;
