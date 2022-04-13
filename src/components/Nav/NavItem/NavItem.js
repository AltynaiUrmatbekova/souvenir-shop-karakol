import "./NavItem.css";

function NavItem(props) {
    const classNames = [];
    if (props.active) {
    classNames.push('active');
}
return (
    <li className="NavItem">
        <a href={props.url}
        className={classNames.join('')}>
        {props.children}</a>
        </li>
);
}
export default NavItem;