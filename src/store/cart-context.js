import React from "react";

const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: () => {},
	removeItem: () => {},
});

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			const item = state.items.find((item) => item.id === action.payload.id);

			let newItems = [...state.items, action.payload];
			if (state.items.length > 0) {
				newItems = state.items.map((item) =>
					item.id === action.payload.id
						? { ...item, amount: item.amount + 1 }
						: item
				);
			}

			return {
				...state,
				items: newItems,
				totalAmount:
					state.totalAmount + action.payload.price * action.payload.amount,
			};
		case "REMOVE":
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
				totalAmount: state.totalAmount - action.payload.price,
			};
		default:
			return state;
	}
};

export const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = React.useReducer(cartReducer, {
		items: [],
		totalAmount: 0,
	});

	return (
		<CartContext.Provider
			value={{
				...cartState,
				addItem: (item) => {
					dispatchCartAction({ type: "ADD", payload: item });
				},
				removeItem: (item) => {},
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContext;
