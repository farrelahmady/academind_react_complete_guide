import React from "react";

//* Import Components
import MealForm from "./MealForm";

//* Import CSS
import style from "./MealItem.module.css";

export default function MealItem(props) {
	return (
		<li className={style.meal}>
			<div>
				<h3>{props.name}</h3>
				<p className={style.description}>{props.description}</p>
				<span className={style.price}>${props.price.toFixed(2)}</span>
			</div>
			<div>
				<MealForm id={props.id} />
			</div>
		</li>
	);
}
