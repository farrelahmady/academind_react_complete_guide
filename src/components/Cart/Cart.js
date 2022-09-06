import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import style from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
	const cartCtx = useContext(CartContext);
	const cartItems = cartCtx.items.map((item) => (
		<CartItem
			key={item.id}
			name={item.name}
			price={item.price}
			amount={item.amount}
			onRemove={() => cartCtx.removeItem(item)}
			onAdd={() => cartCtx.addItem(item)}
		/>
	));

	return (
		<Modal onClose={props.onToggleCart}>
			<ul className={style["cart-items"]}>{cartItems}</ul>
			<div className={style.total}>
				<span>Total Amount: </span>
				<span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
			</div>
			<div className={style.actions}>
				<button className={style["button--alt"]} onClick={props.onToggleCart}>
					Close
				</button>
				{cartCtx.items.length > 0 && (
					<button className={style.button}>Order</button>
				)}
			</div>
		</Modal>
	);
}

export default Cart;
