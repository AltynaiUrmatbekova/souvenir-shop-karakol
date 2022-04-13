import "./Nav.css";
import Logo from "../ui/Logo/Logo"

function Nav() {
    return (
        <nav className="Nav">
           <Logo /> 
            <ul>
               <NavItem url="/">Home</NavItem>
               <NavItem url="/">Product</NavItem>
               <NavItem url="/">Contact</NavItem>
                
            </ul>
        </nav>
    )
}

export default Nav;