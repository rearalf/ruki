import React from 'react';
import { Link } from 'react-router-dom';
import { BurgerBars } from './Icons/Bars';
import { Close } from './Icons/close';
import { ArrowDownLight } from './Icons/ArrowDownLight';
import { SearchIcon } from '../components/Icons/SearchIcon';
import { useNavBar } from '../hooks/useNavBar';
import Logo from '../assets/static/Logo.png';
import '../assets/styles/components/Navbar.sass';

export const Navbar = () => {
	const { CurrentSeason, CurrentYear, Toggle, handleDropDown } = useNavBar();
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
					<NavSearch />
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
					<NavSearch />
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

const NavSearch = () => {
	const {
		isButtonDisabled,
		handleSearch,
		Focus,
		setFocus,
		Name,
		handleSearchInput,
		SearchAnime,
		setSearchAnime,
		handleOnBlur,
		handleOnFocus,
	} = useNavBar();

	return (
		<div
			className="nav_item nav_form"
			tabIndex={1}
			onFocus={e => handleOnFocus(e)}
			onBlur={e => handleOnBlur(e)}>
			<form className="search_nav">
				<input
					type="text"
					className="inputBasic"
					aria-label="Search Anime"
					placeholder="Search Anime"
					onChange={handleSearchInput}
					value={Name}
				/>
				<button className="btnSearch" onClick={handleSearch} disabled={isButtonDisabled}>
					<SearchIcon />
				</button>
			</form>
			<div className="search_respose">
				{Focus &&
					SearchAnime &&
					Name &&
					SearchAnime.map(item => (
						<Link
							to={`/anime/${item.mal_id}`}
							onClick={() => {
								setSearchAnime([]);
								setFocus(!Focus);
							}}
							className="response_link"
							key={item.mal_id}>
							<img src={item.image_url} alt={item.title} />
							<div className="infoRespon">
								<p className="title">{item.title}</p>
								<p className="type">{item.type}</p>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};
