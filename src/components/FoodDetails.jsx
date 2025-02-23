import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import AnalyzedInstruction from "./AnalyzedInstruction";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "836b394897894a459989f8487ca5009d";
  const IMAGE_URL = `https://spoonacular.com/cdn/ingredients_100x100/`;

  useEffect(() => {
    async function fetchDetailsById() {
      const res = await fetch(`${URL}/?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);

      setIsLoading(false);
    }
    fetchDetailsById();
  }, [foodId]);

  return (
    <div>
      <h1>{food.title}</h1>
      <div>
        <img className={styles.imageContainer} src={food.image} />
      </div>
      <div className={styles.foodDetailsContainer}>
        <span>
          <strong>Time: {food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          <strong>Serves: {food.servings}</strong>
        </span>
        <span>
          <strong>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</strong>
        </span>
        <span>
          <strong>
            $ {(food.pricePerServing / 100).toFixed(2)} Per Serving
          </strong>
        </span>
      </div>
      <div>
        <h2>Ingredients</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {food.extendedIngredients.map((item) => (
              <div>
                <img src={`${IMAGE_URL}/${item.image}`} />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.foodInstructionContainer}>
        <p>Food Instruction: {food.instructions}</p>
        <AnalyzedInstruction food={food} isLoading={isLoading} />
      </div>
    </div>
  );
}
