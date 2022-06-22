
import Nav from "../Nav/Nav";
import NavToggle from "../Nav/NavToggle/NavToggle";
import Logo from "../ui/Logo/Logo";
import classes from "./Toolbar.module.css";

function Toolbar({ toggleDrawer }) {
  return (
    <nav className={classes.Toolbar}>
      <div className={classes.container}>
        <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
      </div>
    </nav>
  );
}

export default Toolbar;