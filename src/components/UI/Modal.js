import React from "react";
import ReactDOM from "react-dom";

//* Import CSS
import style from "./Modal.module.css";

const Backdrop = (props) => {
	return <div className={style.backdrop} onClick={props.onClick}></div>;
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
			<Backdrop onClick={props.onClose} />
			<ModalOverlay>{props.children}</ModalOverlay>
		</div>,
		document.body
	);
}
