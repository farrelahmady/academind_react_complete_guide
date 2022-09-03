import React from "react";

//* Import Data
import DUMMY_MEALS from "../../assets/data.js";
import Card from "../UI/Card.js";

//* Import CSS
import style from "./AvailableMeals.module.css";
import MealItem from "./MealItem.js";

function AvailableMeals() {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
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
