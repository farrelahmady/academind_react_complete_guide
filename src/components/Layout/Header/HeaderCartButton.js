import React from "react";

//* Import Components
import CartIcon from "../../Cart/CartIcon";

//* Import CSS
import style from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
	return (
		<button className={style.button} onClick={props.onClick}>
			<span className={style.icon}>
				<CartIcon />
			</span>
			<span>Yout Cart</span>
			<span className={style.badge}>3</span>
		</button>
	);
}

export default HeaderCartButton;
