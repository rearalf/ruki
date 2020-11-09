import React from 'react';
import { Link } from 'react-router-dom';
import { BurgerBars } from './Icons/Bars';
import { SearchForm } from './SearchForm';
import '../assets/styles/components/Navbar.sass';

export const Navbar = () => {
	const Toggle = () => {
		const navbarCollapse = document.getElementById('navbarCollapse');
		navbarCollapse.classList.toggle('show');
	};

	return (
		<header className="header_navbar ">
			<nav className="Navbar">
				<div className="navbarHeader">
					<Link to="/">Ruki</Link>
					<button className="navToggle" onClick={Toggle}>
						<BurgerBars />
					</button>
				</div>
				<div className="navbarCollapse" id="navbarCollapse">
					<ul>
						<li>
							<Link to="/">Anime</Link>
						</li>
						<li>
							<Link to="/">Manga</Link>
						</li>
					</ul>
				</div>
			</nav>
			<div className="containerSearch">
				<SearchForm />
			</div>
		</header>
	);
};
