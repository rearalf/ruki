import React, { Fragment } from 'react';
import { Navbar } from './Navbar';
import '../assets/styles/styles.sass';

export const Layout = ({ children }) => {
	return (
		<Fragment>
			<Navbar />
			<main className="container">{children}</main>
		</Fragment>
	);
};
