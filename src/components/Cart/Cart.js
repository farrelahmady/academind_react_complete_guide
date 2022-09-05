import React from "react";
import Modal from "../UI/Modal";

import style from "./Cart.module.css";

function Cart(props) {
	const cartItems = props.cart.map((item) => (
		<li key={item.id}>{item.name}</li>
	));

	return (
		<Modal onClose={props.onToggleCart}>
			<ul className={style["cart-items"]}>{cartItems}</ul>
			<div className={style.total}>
				<span>Total Amount: </span>
				<span>$14.21</span>
			</div>
			<div className={style.actions}>
				<button className={style["button--alt"]} onClick={props.onToggleCart}>
					Close
				</button>
				<button className={style.button}>Order</button>
			</div>
		</Modal>
	);
}

export default Cart;
