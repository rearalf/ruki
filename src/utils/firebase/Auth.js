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
	const response = auth.createUserWithEmailAndPassword(email, password).catch(error => {
		return {
			code: error.code,
			message: error.message,
		};
	});
	return response;
};

export const SignInWithEmailAndPassword = ({ email, password }) => {
	return auth.signInWithEmailAndPassword(email, password).catch(error => {
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
			return user;
		})
		.catch(error => {
			return {
				code: error.code,
				message: error.message,
			};
		});
};
