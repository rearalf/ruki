import React, { useState } from 'react';
import { SearchIcon } from './Icons/SearchIcon';
import { getSearch } from '../services/getSearch';
import { Link, useHistory } from 'react-router-dom';
import '../assets/styles/components/SearchForm.sass';

export const SearchForm = () => {
	const history = useHistory();
	const [ SearchAnime, setSearchAnime ] = useState([]);
	const [ Name, setName ] = useState('');

	const handleSearchInput = e => {
		if (e.length >= 4) {
			getSearch({ title: e }).then(res => {
				setSearchAnime(res.results);
			});
		}
		else {
			setSearchAnime([]);
		}
		setName(e);
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
				<div className="contentInputSearch">
					<input
						type="text"
						className="inputBasic inputSearch"
						placeholder="Search Anime"
						onChange={e => handleSearchInput(e.target.value)}
						value={Name}
					/>
					<div className="searchRespose">
						{SearchAnime &&
							Name &&
							SearchAnime.map(item => (
								<Link
									to={`/anime/${item.mal_id}`}
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
