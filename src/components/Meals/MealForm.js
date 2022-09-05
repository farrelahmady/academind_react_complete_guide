import React, { useRef } from "react";
import Input from "../UI/Input";

//* Import CSS
import style from "./MealForm.module.css";

export default function MealForm(props) {
	const [amountIsValid, setAmountIsValid] = React.useState(true);
	const amountInput = useRef();
	const formSubmitHandler = (e) => {
		e.preventDefault();

		const amount = parseInt(amountInput.current.value);

		if (
			isNaN(amount) ||
			amount < amountInput.current.min ||
			amount > amountInput.current.max
		) {
			setAmountIsValid(false);
			amountInput.current.focus();
			return;
		}

		setAmountIsValid(true);

		props.onAddToCart(+amountInput.current.value);
	};
	return (
		<form className={style.form} onSubmit={formSubmitHandler}>
			<Input
				ref={amountInput}
				label="Amount"
				input={{
					id: `amount_${props.id}`,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
			{!amountIsValid && (
				<p className={style.error}>Amount must be a number between 1 and 5</p>
			)}
		</form>
	);
}
