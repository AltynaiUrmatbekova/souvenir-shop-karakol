import classes from "./NavToggle.module.css";

function NavToggle({ callback }) {
  return (
    <button onClick={callback} className={classes.NavToggle}>
      &nbsp;
    </button>
  );
}

export default NavToggle;