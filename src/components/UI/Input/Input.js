import React, { useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
	const inputElement = React.useRef();

	useImperativeHandle(ref, () => {
		return {
			focus: () => {
				inputElement.current.focus();
			},
		};
	});

	return (
		<div
			className={`${classes.control} ${
				props.isValid === false ? classes.invalid : ""
			}`}
		>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				ref={inputElement}
				type={props.type}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
			/>
		</div>
	);
});

export default Input;
