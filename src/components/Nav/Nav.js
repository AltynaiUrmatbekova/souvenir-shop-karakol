import classes from "./Nav.module.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";
import NavToggle from "./NavToggle/NavToggle";

function Nav() {
  return (
    <nav className={classes.Nav}>
      <div className={classes.container}>
        <Logo />
        <ul>
          <NavItem url="/">Home</NavItem>
          <NavItem url="/products"> Product</NavItem>
          <NavItem url="/contacts">Contact</NavItem>
        </ul>
    <NavToggle />
      </div>
    </nav>
  );
}

export default Nav;
