import React, { useEffect } from "react";

const AuthContext = React.createContext({
	isAuthenticated: false,
	login: (email, password) => {},
	logout: () => {},
});

export const AuthContextProvider = (props) => {
	const [isAuthenticated, setIsAuthenticated] = React.useState(false);

	useEffect(() => {
		if (localStorage.getItem("auth")) {
			setIsAuthenticated(true);
		}
	});

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem("auth", "true");
		setIsAuthenticated(true);
	};

	const logoutHandler = () => {
		localStorage.removeItem("auth");
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: isAuthenticated,
				login: loginHandler,
				logout: logoutHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
