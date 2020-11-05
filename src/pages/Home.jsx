import React, { Fragment, useEffect, useState } from 'react';
import { ListCard } from '../components/ListCard';
import { Pagination } from '../components/Pagination';
import { getSeason } from '../services/getData';
import { sortData } from '../utils/sortData';

const Object_Anime = {
	anime: [],
	season_year: new Date().getFullYear(),
	season_name: '',
};

export const Home = () => {
	const [ AnimeSeason, setAnimeSeason ] = useState(Object_Anime);
	const [ ListAnimes, setListAnimes ] = useState([]);
	const [ Page, setPage ] = useState(0);

	useEffect(() => {
		getSeason().then(setAnimeSeason);
	}, []);

	useEffect(
		() => {
			const { arregloDeArreglos } = sortData({
				data: AnimeSeason.anime,
			});
			setListAnimes(arregloDeArreglos);
		},
		[ AnimeSeason.anime ],
	);

	return (
		<Fragment>
			<ListCard list={ListAnimes[Page]} />
			<Pagination TotalAnime={ListAnimes.length} Page={Page} setPage={setPage} />
		</Fragment>
	);
};
