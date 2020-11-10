import React, { useState } from 'react';
import { SearchIcon } from './Icons/SearchIcon';
import { getSearch } from '../services/getSearch';
import { Link } from 'react-router-dom';
import '../assets/styles/components/SearchForm.sass';

export const SearchForm = () => {
	const [ SearchAnime, setSearchAnime ] = useState([]);
	const [ typeSearch, setTypeSearch ] = useState('anime');

	const handleSearchInput = e => {
		e.length >= 4
			? getSearch({ title: e, typeSearch }).then(res => {
					setSearchAnime(res.results);
				})
			: setSearchAnime([]);
	};

	const handleChangeRating = e => {
		setTypeSearch(e.target.value);
	};

	return (
		<div className="searchContentNavbar">
			<form className="formSearch">
				<select
					className="selectSearch"
					aria-label="Default select example"
					onChange={handleChangeRating}>
					<option value="anime">Anime</option>
					<option value="manga">Manga</option>
				</select>
				<div className="contentInputSearch">
					<input
						type="text"
						className="inputSearch"
						placeholder="Search"
						onChange={e => handleSearchInput(e.target.value)}
					/>
					<div className="searchRespose">
						{SearchAnime &&
							SearchAnime.map(item => (
								<Link
									to={`/${typeSearch}/${item.mal_id}`}
									onClick={() => setSearchAnime([])}
									className="response"
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
				<button className="btnSearch">
					<SearchIcon />
				</button>
			</form>
		</div>
	);
};
