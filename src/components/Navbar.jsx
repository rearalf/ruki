import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BurgerBars } from './Icons/Bars';
import { SearchForm } from './SearchForm';
import ContextUser from '../context/user';
import { SignOut } from '../utils/firebase/Auth';
import '../assets/styles/components/Navbar.sass';

export const Navbar = () => {
	const User = useContext(ContextUser);

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
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/anime">Anime</Link>
						</li>
						{User === null ? (
							<li>
								<Link to="/sign">Sign</Link>
							</li>
						) : (
							<Fragment>
								<li>
									<Link to="/watched">Watched</Link>
								</li>
								<li>
									<Link onClick={SignOut} to="/">
										Logout
									</Link>
								</li>
							</Fragment>
						)}
					</ul>
				</div>
			</nav>
			<div className="containerSearch">
				<SearchForm />
			</div>
		</header>
	);
};
