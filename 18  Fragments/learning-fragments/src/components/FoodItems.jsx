import Item from "./Item";
import "../App.css";
const FoodItems = () => {
  let foodItems = ["dal", "green vegetabels", "roti", "salad"];
  let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;

  return (
    <>
      {emptyMessage}
      <ul className="list-group">
        {foodItems.map((item) => (
          <Item key={item} foodItem={item} />
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
