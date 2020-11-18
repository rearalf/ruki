import React, { useState } from 'react';
import { SearchIcon } from './Icons/SearchIcon';
import { getSearch } from '../services/getSearch';
import { Link, useHistory } from 'react-router-dom';
import '../assets/styles/components/SearchForm.sass';

export const SearchForm = () => {
	const history = useHistory();
	const [ SearchAnime, setSearchAnime ] = useState([]);
	const [ typeSearch, setTypeSearch ] = useState('anime');
	const [ Name, setName ] = useState('');

	const handleSearchInput = e => {
		if (e.length >= 4) {
			getSearch({ title: e, typeSearch }).then(res => {
				setSearchAnime(res.results);
			});
		}
		else {
			setSearchAnime([]);
		}
		setName(e);
	};

	const handleChangeRating = e => {
		setTypeSearch(e.target.value);
	};

	const handleSearch = e => {
		e.preventDefault();
		Name && history.replace(`/search/${Name}`);
		setName('');
	};

	const isButtonDisabled = !Name.length && !SearchAnime.length !== 0;

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
						value={Name}
					/>
					<div className="searchRespose">
						{SearchAnime &&
							Name &&
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
				<button className="btnSearch" disabled={isButtonDisabled} onClick={handleSearch}>
					<SearchIcon />
				</button>
			</form>
		</div>
	);
};
