import { auth } from './firebaseConfig';

const mapUserFromFirebaseAuthToUser = user => {
	const { displayName, email, photoURL, uid } = user;
	return {
		avatar: photoURL,
		username: displayName,
		email,
		uid,
	};
};

export const onAuthStateChanged = onChange => {
	return auth.onAuthStateChanged(user => {
		const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
		onChange(normalizedUser);
	});
};

export const CreateUserWithEmailAndPassword = ({ email, password }) => {
	const response = auth
		.createUserWithEmailAndPassword(email, password)
		.then(user => {
			SignUpApi(user);
			return user;
		})
		.catch(error => {
			return {
				code: error.code,
				message: error.message,
			};
		});
	return response;
};

export const SignInWithEmailAndPassword = ({ email, password }) => {
	return auth
		.signInWithEmailAndPassword(email, password)
		.then(user => {
			LogInApi(user);
			return user;
		})
		.catch(error => {
			return {
				code: error.code,
				message: error.message,
			};
		});
};

export const SignOut = () => {
	return auth
		.signOut()
		.then(user => {
			localStorage.removeItem('token');
			return user;
		})
		.catch(error => {
			return {
				code: error.code,
				message: error.message,
			};
		});
};

const LogInApi = user => {
	const { email, uid } = user.user;
	const API = `${process.env.API_RUKI_BACKEND}/api/user/lognin`;
	fetch(API, {
		method: 'POST',
		body: JSON.stringify({ email, id_user: uid }),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => {
			const { message, token } = response;
			localStorage.setItem('token', token);
			console.log(message);
			return response;
		});
};

const SignUpApi = user => {
	const { email, uid } = user.user;
	const API = `${process.env.API_RUKI_BACKEND}/api/user/signup`;
	fetch(API, {
		method: 'POST',
		body: JSON.stringify({ email, id_user: uid }),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => {
			const { message, token } = response;
			localStorage.setItem('token', token);
			console.log(message);
			return response;
		});
};
