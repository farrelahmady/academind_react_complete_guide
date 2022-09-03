import React, { Fragment } from "react";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";

import style from "./ErrorModal.module.css";

const Backdrop = (props) => {
	return <div className={style.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
	return (
		<Card className={style.modal}>
			<header className={style.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={style.content}>
				<p>{props.message}</p>
			</div>
			<footer className={style.actions}>
				<Button onClick={props.onClick}>Close</Button>
			</footer>
		</Card>
	);
};

export const ErrorModal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClick} />,
				document.body
			)}
			{ReactDOM.createPortal(
				<ModalOverlay onClick={props.onClick} {...props} />,
				document.body
			)}
		</Fragment>
	);
};
