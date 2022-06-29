// import { useSelector } from "react-redux";
// import NavItem from "../Nav/NavItem/NavItem";
// import classes from "./SignOutItem.module.css";
// function SignOutItem() {
//   const isAuthenticated = useSelector((store) => store.auth.idToken !== null);
//   return (
//     <div className={classes.SignOutItem}>
//       <ul className={classes.sign}>
//         {isAuthenticated ? <NavItem url="/signout">Sign out</NavItem> : null}
//         {!isAuthenticated ? <NavItem url="/auth">Sign in</NavItem> : null}
//       </ul>
//     </div>
//   );
// }

// export default SignOutItem;