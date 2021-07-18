import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@static/Logo.png';
import '@styles/components/Footer.sass';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container footer_header">
				<Link to="/" className="brand">
					<img src={Logo} alt="Logo" className="img_brand" />
				</Link>
				<a href="https://github.com/rearalf/ruki-anime" target="_blank" className="repository">
					<img
						src="https://www.vectorlogo.zone/logos/github/github-tile.svg"
						alt="Github"
					/>
					<h3>Repository</h3>
				</a>
			</div>
			<div className="container footer_end">
				<h3>© {new Date().getFullYear()} No le copie a nadie</h3>
			</div>
		</footer>
	);
};
