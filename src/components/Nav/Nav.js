import "./Nav.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <nav className="Nav">
      <Logo />
      <ul>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/products"> Product</NavItem>
        <NavItem url="/contacts">Contact</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;
