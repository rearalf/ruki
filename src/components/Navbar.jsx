import React from 'react';
import { Link } from 'react-router-dom';
import { BurgerBars } from './Icons/Bars';
import Logo from '../assets/static/Logo.png';
import { Close } from './Icons/close';
import { ArrowDownLight } from './Icons/ArrowDownLight';
import { getDate } from '../utils/settings';
import '../assets/styles/components/Navbar.sass';

export const Navbar = () => {
	const Toggle = () => {
		const navbarCollapse = document.getElementById('navbar_collapse');
		navbarCollapse.classList.toggle('show');
		const navToggle = document.querySelectorAll('.btn_nav_toggle');
		navToggle.forEach(btn => {
			btn.classList.toggle('none_show');
		});
	};

	const handleDropDown = () => {
		const dropDown = document.getElementById('navbarDropdown');
		dropDown.classList.toggle('show');
		const svgDropDown = document.getElementById('svgDropDown').firstChild;
		svgDropDown.classList.toggle('turn');
	};

	const { CurrentYear, CurrentSeason } = getDate();

	return (
		<header className="top_navbar mb-2">
			<nav className="navbar_desktop">
				<div className="navbar_brand">
					<Link to="/" className="brand">
						<img src={Logo} alt="Logo" className="img_brand" />
					</Link>
				</div>
				<ul className="navbar_nav">
					<li className="nav_item">
						<Link to="/" className="nav_link">
							Home
						</Link>
					</li>
					<li className="nav_item dropdown">
						<Link to="/anime" className="nav_link">
							Anime
							<ArrowDownLight />
						</Link>
						<ul className="dropdown_nav navbar_nav">
							<li className="nav_item">
								<Link
									to={`/anime/season/${CurrentYear}/${CurrentSeason}`}
									className="nav_link">
									Season Animes
								</Link>
							</li>
							<li className="nav_item">
								<Link to="/anime" className="nav_link">
									Top Animes
								</Link>
							</li>
							<li className="nav_item">
								<Link to="/search" className="nav_link">
									Anime Search
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav_item">
						<Link to="/" className="nav_link">
							Login
						</Link>
					</li>
				</ul>
			</nav>
			<nav className="navbar_movil">
				<button className="btn_nav_toggle" onClick={Toggle}>
					<BurgerBars />
				</button>
				<button className="btn_nav_toggle none_show" onClick={Toggle}>
					<Close />
				</button>
				<Link to="/" className="navbar_brand">
					<img src={Logo} alt="Logo" />
				</Link>
				<Link to="/">Login</Link>
			</nav>
			<div className="navbar_collapse" id="navbar_collapse">
				<ul className="navbar_nav container">
					<li className="nav_item">
						<Link to="/" className="nav_link">
							Home
						</Link>
					</li>
					<li className="nav_item dropdown">
						<Link className="nav_link" onClick={handleDropDown}>
							Anime
							<i id="svgDropDown">
								<ArrowDownLight />
							</i>
						</Link>
						<div className="dropdown_nav" id="navbarDropdown">
							<ul className="navbar_nav">
								<li className="nav_item">
									<Link to="/anime" className="nav_link">
										Animes
									</Link>
								</li>
								<li className="nav_item">
									<Link
										to={`/anime/season/${CurrentYear}/${CurrentSeason}`}
										className="nav_link">
										Season Animes
									</Link>
								</li>
								<li className="nav_item">
									<Link to="/anime" className="nav_link">
										Top Animes
									</Link>
								</li>
								<li className="nav_item">
									<Link to="/search" className="nav_link">
										Anime Search
									</Link>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</header>
	);
};
