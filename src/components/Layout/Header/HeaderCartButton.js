import React, { useContext } from "react";

//* Import Context
import CartContext from "../../../store/cart-context";

//* Import Components
import CartIcon from "../../Cart/CartIcon";

//* Import CSS
import style from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
	const Cart = useContext(CartContext);

	const totalItemsInCart = Cart.items.reduce((totalItem, item) => {
		return totalItem + item.amount;
	}, 0);

	return (
		<button className={style.button} onClick={props.onClick}>
			<span className={style.icon}>
				<CartIcon />
			</span>
			<span>Yout Cart</span>
			<span className={style.badge}>{totalItemsInCart}</span>
		</button>
	);
}

export default HeaderCartButton;
