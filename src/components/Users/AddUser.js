import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import style from "./AddUser.module.css";
import { useState } from "react";
import { ErrorModal } from "../UI/ErrorModal";

export const AddUser = (props) => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");
	const [error, setError] = useState(null);

	const addUserHandler = (event) => {
		event.preventDefault();

		//* Validation
		if (username.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: "Invalid Input",
				message: "Please enter a valid username and age",
			});
			return;
		}
		if (+age < 1) {
			setError({
				title: "Invalid Age",
				message: "Please enter a valid age",
			});
			return;
		}

		props.onAddUser(username, age);

		//* Reset form
		setUsername("");
		setAge("");
	};

	const changeUsernameHandler = (event) => {
		//* Set the value of the username input to the value of the input
		setUsername(event.target.value);
	};

	const changeAgeHandler = (event) => {
		//* Set the value of the age input to the value of the input
		setAge(event.target.value);
	};

	return (
		<>
			{/*  Error Modal only show if error state was not null/empty */}
			{error && <ErrorModal onClick={() => setError(null)} {...error} />}
			<Card className={style.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						autoComplete="off"
						type="text"
						id="username"
						name="username"
						value={username}
						onChange={changeUsernameHandler}
					/>
					<label htmlFor="age">Age</label>
					<input
						autoComplete="off"
						type="number"
						id="age"
						name="age"
						value={age}
						onChange={changeAgeHandler}
					/>
					<Button type="submit">Add user</Button>
				</form>
			</Card>
		</>
	);
};
