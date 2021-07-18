import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { useSearch } from '@hooks/useSearch';
import { ListCard } from '@components/ListCard';
import { Genres } from '@utils/models';
import { Header } from '@components/Header';
import { MoreInfo } from '@components/MoreInfo';
import { ChangeTypeRated } from '@components/ChangeTypeRated';
import '@styles/components/SearchPage.sass';

export const Search = () => {
	const { name } = useParams();
	const [ NameAnime, setNameAnime ] = useState(name);
	const [ CheckGenres, setCheckGenres ] = useState([]);

	const { SearchAnime, handleChangeOption, handleChangeRated, Option, Rated } = useSearch({
		title: NameAnime,
		genres: CheckGenres,
	});

	const handleOnChange = e => {
		setNameAnime(e.target.value);
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
				<h1 className="mb-1">Search Anime</h1>
				<div>
					<input
						type="text"
						placeholder="Search Anime"
						className="inputBasic inputSearch mb-1"
						value={NameAnime}
						onChange={handleOnChange}
					/>
				</div>
				<MoreInfo id="Related" title="Genre Filter">
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
				</MoreInfo>
			</form>
			<ChangeTypeRated
				Option={Option}
				Rated={Rated}
				handleChangeOption={handleChangeOption}
				handleChangeRated={handleChangeRated}
			/>
			<ListCard list={SearchAnime} />
		</Layout>
	);
};
