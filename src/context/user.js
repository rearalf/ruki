import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from '../utils/firebase/Auth';

const DataUser = {
	avatar: null,
	email: null,
	uid: null,
	username: null,
};

const ContextUser = createContext(DataUser);

export function UserContextProvider({ children }){
	const [ User, setUser ] = useState(DataUser);

	useEffect(() => {
		onAuthStateChanged(async user => {
			setUser(user);
		});
	}, []);

	return <ContextUser.Provider value={User}>{children}</ContextUser.Provider>;
}

export default ContextUser;
