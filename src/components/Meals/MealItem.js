import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

//* Import Components
import MealForm from "./MealForm";

//* Import CSS
import style from "./MealItem.module.css";

export default function MealItem(props) {
	const Cart = useContext(CartContext);

	const addToCartHandler = (amount) => {
		Cart.addItem({
			id: props.id,
			name: props.name,
			price: props.price,
			amount: amount,
		});
	};

	return (
		<li className={style.meal}>
			<div>
				<h3>{props.name}</h3>
				<p className={style.description}>{props.description}</p>
				<span className={style.price}>${props.price.toFixed(2)}</span>
			</div>
			<div>
				<MealForm id={props.id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
}
