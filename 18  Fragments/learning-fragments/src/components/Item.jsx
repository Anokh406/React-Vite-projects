import styles from "./Item.module.css";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Item = (props) => {
  let { foodItem } = props;
  const handleBuyBtnClicked = () => {
    console.log(`${foodItem} being bought`);
    alert(`${foodItem} being bought`);
  };
  return (
    <>
      <li className="list-group-item kg-item">
        {foodItem}
        <button
          className={`${styles.button}  btn btn-primary`}
          onClick={handleBuyBtnClicked}
        >
          Buy{" "}
        </button>
      </li>
    </>
  );
};
export default Item;
