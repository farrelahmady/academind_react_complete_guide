import React, {
	useContext,
	useEffect,
	useReducer,
	useRef,
	useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
	switch (action.type) {
		case "EMAIL_CHANGE":
			return {
				...state,
				value: action.value,
				isValid: action.value.includes("@"),
			};
		default:
			return state;
	}
};
const passwordReducer = (state, action) => {
	switch (action.type) {
		case "PASSWORD_CHANGE":
			return {
				...state,
				value: action.value,
				isValid: action.value.trim().length > 6,
			};
		default:
			return state;
	}
};

const Login = () => {
	const auth = useContext(AuthContext);
	const [email, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: null,
	});
	const [password, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: null,
	});
	const [formIsValid, setFormIsValid] = useState(false);

	// useRef
	const emailInput = useRef();
	const passwordInput = useRef();

	useEffect(() => {
		// Similiar to componentDidMount and componentDidUpdate:
		//? This is called after the first render and after every update
		const timeOut = setTimeout(() => {
			console.log(`${Login.name}: Checking if form is valid`);
			setFormIsValid(email.isValid && password.isValid);
		}, 1000);

		// Similiar with ComponentDidUnmount in Class Components
		//? This will be called when the component is unmounted
		return () => {
			console.log(`${Login.name}: Clearing useEffect timeout`);
			clearTimeout(timeOut);
		};
	}, [email.value, password.value]);

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: "PASSWORD_CHANGE", value: event.target.value });
	};

	const validatePasswordHandler = (event) => {
		dispatchPassword({ type: "PASSWORD_CHANGE", value: event.target.value });
	};

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: "EMAIL_CHANGE", value: event.target.value });
	};

	const validateEmailHandler = (event) => {
		dispatchEmail({ type: "EMAIL_CHANGE", value: event.target.value });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			auth.login(email.value, password.value);
		} else if (!email.isValid) {
			emailInput.current.focus();
		} else if (!password.isValid) {
			passwordInput.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInput}
					id="email"
					type="email"
					label="E-Mail"
					value={email.value}
					isValid={email.isValid}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					ref={passwordInput}
					id="password"
					type="password"
					label="Password"
					value={password.value}
					isValid={password.isValid}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
