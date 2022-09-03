import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
	const auth = useContext(AuthContext);
	return (
		<nav className={classes.nav}>
			<ul>
				{auth.isAuthenticated && (
					<li>
						<a href="/">Users</a>
					</li>
				)}
				{auth.isAuthenticated && (
					<li>
						<a href="/">Admin</a>
					</li>
				)}
				{auth.isAuthenticated && (
					<li>
						<button onClick={auth.logout}>Logout</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
