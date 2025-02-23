import styles from "./fooditem.module.css";
export default function FoodItem({ item, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={item.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{item.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => setFoodId(item.id)} className={styles.button}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
