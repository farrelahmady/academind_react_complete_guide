import React from "react";

//* Import Data
import DUMMY_MEALS from "../../assets/data.js";

//* Import Component
import Card from "../UI/Card.js";
import MealItem from "./MealItem.js";

//* Import CSS
import style from "./AvailableMeals.module.css";

function AvailableMeals() {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));
	return (
		<section className={style.meals}>
			<Card>{mealsList}</Card>
		</section>
	);
}

export default AvailableMeals;
