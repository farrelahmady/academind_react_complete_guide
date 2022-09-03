import React from "react";
import ReactDOM from "react-dom";

//* Import CSS
import style from "./Modal.module.css";

const Backdrop = () => {
	return <div className={style.backdrop}></div>;
};

const ModalOverlay = (props) => {
	return (
		<div className={style.modal}>
			<div className={style.content}>{props.children}</div>
		</div>
	);
};

export default function Modal(props) {
	return ReactDOM.createPortal(
		<div id="overlays">
			<Backdrop />
			<ModalOverlay>{props.children}</ModalOverlay>
		</div>,
		document.body
	);
}
