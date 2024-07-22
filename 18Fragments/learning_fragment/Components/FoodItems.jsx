import Items from "./Items";
const FoodItems = () => {
  const foodItems = [
    "Dal",
    "Rice",
    "Chapati",
    "Salad",
    "Green Vegetables",
    "Fruits",
  ];
  return (
    <ul className="list-group">
      {foodItems.map((items) => (
        <Items key={items} foodItems={items}></Items>
      ))}
    </ul>
  );
};
export default FoodItems;
