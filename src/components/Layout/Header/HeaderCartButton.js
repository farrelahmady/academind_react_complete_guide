import React, { useContext, useEffect } from "react";

//* Import Context
import CartContext from "../../../store/cart-context";

//* Import Components
import CartIcon from "../../Cart/CartIcon";

//* Import CSS
import style from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
	const [btnIsHighlighted, setBtnIsHighlighted] = React.useState(false);
	const Cart = useContext(CartContext);

	const totalItemsInCart = Cart.items.reduce((totalItem, item) => {
		return totalItem + item.amount;
	}, 0);

	useEffect(() => {
		if (Cart.items.length > 0) {
			setBtnIsHighlighted(true);
		}

		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [Cart.items]);

	return (
		<button
			className={`${style.button} ${btnIsHighlighted ? style.bump : ""}`}
			onClick={props.onClick}
		>
			<span className={style.icon}>
				<CartIcon />
			</span>
			<span>Yout Cart</span>
			<span className={style.badge}>{totalItemsInCart}</span>
		</button>
	);
}

export default HeaderCartButton;
