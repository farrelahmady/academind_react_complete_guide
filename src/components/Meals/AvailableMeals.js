import React from "react";

//* Import Data
import DUMMY_MEALS from "../../assets/data.js";

//* Import CSS
import style from "./AvailableMeals.module.css";

function AvailableMeals() {
	const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
	return (
		<section className={style.meals}>
			<ul>{mealsList}</ul>
		</section>
	);
}

export default AvailableMeals;
