import React, { Fragment } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import '../assets/styles/styles.sass';

export const Layout = ({ children }) => {
	return (
		<Fragment>
			<Navbar />
			<main className="container">{children}</main>
			<Footer />
		</Fragment>
	);
};
