# Users App

> Udemy React Complete Guide

## Components

```javascript
<AddUser onAddUser={addUserHandler} />
<UsersList users={users} />
```

**React** is basically a component-based Javascript framework that makes it easier for developers to break the interface into parts. There are 2 main components that I made in this application. The `AddUser` component is a form component that is intended for **User** to add a new **User**. While the `UsersList` component is intended to display **Users** that have been created in the form of a list.

## Props

```javascript
const UsersList = (props) => {
	return (
		<Card className={style.users}>
			<ul>
				{props.users.map((user) => {
					return (
						<li key={user.id}>
							{user.name} ({user.age} Years Old)
						</li>
					);
				})}
			</ul>
		</Card>
	);
};
```

Props are used to provide input to components. For example, the `UsersList` component will receive **props** _users_ yang diharapkan berbentuk array sehingga dapat dimapping untuk mengembalikan elemen html berupa list.

## State

```javascript
import { useState } from "react";

const [username, setUsername] = useState("");
const [age, setAge] = useState("");
const [error, setError] = useState(null);
```

Another thing I've learned in this React course is `State`. `State` is an object to store data in React and will be rendered or reloaded when the data changes. For example, in this application there are `state` _name_ and _age_ in the `AddUser` component which will reload the input elements on the form when there is a change in the value of the `state`.

## Fragment

React cannot return more than 1 element but each element must be in 1 element root. This can be a problem known as `div soup`.

```html
<div>
	<div>
		<div>
			<h1>This is div Soup</h1>
		</div>
	</div>
</div>
```

Developers can work around this by using a React Fragment as their root element. One example is found in the `App` Component which uses `<React.Fragment></React.Fragment>` as a wrapper element for the component it contains.

## Portal

```javascript
const ErrorModal = (props) => {
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
```

In this application there is an `ErrorModal` component which will be rendered in the `AddUser` component. It's not a big problem if that happens however, it would be better if we can render these components outside of the main root in this application. Therefore we use `React Portal` which will render a component on the specified element.
