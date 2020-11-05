import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Navbar.sass';

export const Navbar = () => {
	return (
		<nav className="Navbar">
			<Link to="/">Ruki</Link>
			<ul>
				<li>
					<Link to="/">Anime</Link>
				</li>
				<li>
					<Link to="/">Manga</Link>
				</li>
			</ul>
		</nav>
	);
};
