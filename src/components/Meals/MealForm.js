import React from "react";
import Input from "../UI/Input";

//* Import CSS
import style from "./MealForm.module.css";

export default function MealForm(props) {
	const formSubmitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<form className={style.form} onSubmit={formSubmitHandler}>
			<Input
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
		</form>
	);
}
