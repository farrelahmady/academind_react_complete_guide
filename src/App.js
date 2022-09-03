import React from "react";
import Cart from "./components/Cart/Cart";

//* Components
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
	return (
		<>
			<Cart
				cart={[
					{
						id: "m1",
						name: "Sushi",
						description: "Finest fish and veggies",
						price: 22.99,
					},
				]}
			/>
			<Header />
			<Meals />
		</>
	);
}

export default App;
