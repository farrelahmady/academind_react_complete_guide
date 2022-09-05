import React from "react";

//* Import CSS
import style from "./Header.module.css";

//* Import Image
import mealImage from "../../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
	return (
		<>
			<header className={style.header}>
				<h1>Food Order</h1>
				<HeaderCartButton onClick={props.onToggleCart} />
			</header>
			<div>
				<img
					src={mealImage}
					alt="Image full of food!"
					className={style["main-image"]}
				/>
			</div>
		</>
	);
}

export default Header;
