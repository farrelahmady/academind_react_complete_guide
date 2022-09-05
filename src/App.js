import React from "react";
import Cart from "./components/Cart/Cart";

//* Components
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
	const [showCart, setShowCart] = React.useState(false);

	const toggleCart = () => {
		setShowCart(!showCart);
	};

	return (
		<>
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
		</>
	);
}

export default App;
