import React from "react";

//* Import Components
import AvailableMeals from "./AvailableMeals";
import Summary from "./Summary";

function Meals() {
	return (
		<>
			<Summary />
			<AvailableMeals />
		</>
	);
}

export default Meals;
