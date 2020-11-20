import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SignInWithEmailAndPassword } from '../utils/firebase/Auth';

export const LogIn = () => {
	const history = useHistory();
	const [ UserParams, setUserParams ] = useState({
		email: '',
	});

	const handleOnChange = (id, value) => {
		setUserParams({
			...UserParams,
			[id]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		SignInWithEmailAndPassword(UserParams).then(res => {
			if (res.hasOwnProperty('message')) {
				console.log(res.message);
			}
			else {
				history.replace('/');
			}
		});
	};

	return (
		<form onSubmit={handleSubmit} className="form FormSignIn">
			<h1>Log In</h1>
			<input
				type="email"
				id="email"
				placeholder="Email"
				onChange={e => handleOnChange(e.target.id, e.target.value)}
				required
			/>
			<input
				type="password"
				id="password"
				placeholder="Password"
				onChange={e => handleOnChange(e.target.id, e.target.value)}
				required
			/>
			<button type="submit">Log In</button>
		</form>
	);
};
