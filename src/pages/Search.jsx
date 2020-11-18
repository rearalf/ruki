import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useSearch } from '../hooks/useSearch';
import { ListCard } from '../components/ListCard';
import '../assets/styles/components/SearchPage.sass';
import { ArrowDown } from '../components/Icons/ArrowDown';
import { Genres } from '../utils/models';
import { Header } from '../components/Header';

export const Search = () => {
	const { name } = useParams();
	const [ NameAnime, setNameAnime ] = useState(name);
	const [ CheckGenres, setCheckGenres ] = useState([]);

	const { SearchAnime } = useSearch({ title: NameAnime, genres: CheckGenres });

	const handleOnChange = e => {
		setNameAnime(e.target.value);
	};

	const showInfo = id => {
		const info = document.getElementById(id);
		info.classList.toggle('show');
	};

	const handleCheck = e => {
		const valor = e.target.id;
		const validate = CheckGenres.includes(valor);
		if (!validate) {
			setCheckGenres(CheckGenres => CheckGenres.concat(valor));
		}
		else {
			setCheckGenres(CheckGenres => {
				var i = CheckGenres.indexOf(valor);
				CheckGenres.splice(i, 1);
				return CheckGenres;
			});
		}
	};

	useEffect(
		() => {
			setNameAnime(name);
		},
		[ name ],
	);

	return (
		<Layout>
			<Header title="Search Anime" description="Search all anime for genres" />
			<form className="formSeachPage">
				<h1>Search Anime</h1>
				<div>
					<input
						type="text"
						placeholder="Search Anime"
						className="inputSearch"
						value={NameAnime}
						onChange={handleOnChange}
					/>
				</div>
				<section className="moreInfo">
					<div className="headerInfo" onClick={() => showInfo('Related')}>
						<h4>Genre Filter</h4>
						<ArrowDown Width={30} />
					</div>
					<hr />
					<div className="moreInfoDown" id="Related">
						<div className="listGenres">
							{Genres.map((item, index) => (
								<div key={index + 1} className="genresInput">
									<input
										type="checkbox"
										id={index + 1}
										name={item}
										onChange={handleCheck}
									/>
									<label htmlFor={index + 1}>{item}</label>
								</div>
							))}
						</div>
					</div>
				</section>
			</form>
			<ListCard list={SearchAnime} />
		</Layout>
	);
};
