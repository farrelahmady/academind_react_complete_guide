import React from "react";

//* Import Components
import CartIcon from "../../Cart/CartIcon";

//* Import CSS
import style from "./HeaderCartButton.module.css";
function HeaderCartButton() {
	return (
		<button className={style.button}>
			<span className={style.icon}>
				<CartIcon />
			</span>
			<span>Yout Cart</span>
			<span className={style.badge}>3</span>
		</button>
	);
}

export default HeaderCartButton;
