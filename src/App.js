import React from "react";
import Cart from "./components/Cart/Cart";

//* Components
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import { CartProvider } from "./store/cart-context";

function App() {
	const [showCart, setShowCart] = React.useState(false);

	const toggleCart = () => {
		setShowCart(!showCart);
	};

	return (
		<CartProvider>
			{showCart && (
				<Cart
					cart={[
						{
							id: "m1",
							name: "Sushi",
							description: "Finest fish and veggies",
							price: 22.99,
						},
					]}
					onToggleCart={toggleCart}
				/>
			)}

			<Header onToggleCart={toggleCart} />
			<Meals />
		</CartProvider>
	);
}

export default App;
