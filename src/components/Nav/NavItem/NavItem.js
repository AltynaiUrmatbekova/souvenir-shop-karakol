import "./NavItem.css";

function NavItem(props) {
    <li className="NavItem">
        <a href={props.url}>{props.children}</a>
        </li>
}
export default NavItem;