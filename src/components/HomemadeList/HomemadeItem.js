import { Link } from "react-router-dom";
import classes from "./HomemadeItem.module.css";

function HomemadeItem({ homemade }) {
  return (
    <div className={classes.HomemadeItem}>
      <img src={homemade.image} alt={homemade.title} />
      <div className={classes.container}>
        <Link to={"/homemades/" + homemade.homemadeId}>{homemade.title} </Link>
      
      </div>
    </div>
  );
}

export default HomemadeItem;