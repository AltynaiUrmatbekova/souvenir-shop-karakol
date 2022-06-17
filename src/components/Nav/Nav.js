import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";
import icon from "../../assets/shopping-cart-icon.jpg";
import search from "../../assets/search.png";
import telephone from "../../assets/phone.png";


function Nav() {

  const styles = {
    width: "40px",
    height: "40px",
    
  }
  const styles1 = {
    width: "40px",
    height: "40px",
  }
  const styles2 = {
    width: "20px",
    height: "20px",
  }
  

  return (
        <ul className={classes.Nav}>
          <NavItem url="/">Home</NavItem>
          <NavItem url="/products"> Products</NavItem>
          <NavItem url="/homemade"> Homemade</NavItem>
          <NavItem url="/contacts">Contact</NavItem>
          <NavItem url=""><img src={icon} alt="cart" style={styles}/></NavItem>
          <NavItem url="#"><img src={search} alt="cart1" style={styles1}/></NavItem>
          <NavItem url="#"><img src={telephone} alt="cart2" style={styles2}/>996705617968</NavItem>
        </ul>
  );
}
export default Nav;
