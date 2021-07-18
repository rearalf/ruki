import { useEffect, useState } from 'react';
import { getSearch } from '@services/getSearch';
import { filterAnimes } from './useGetSeasonAnime';

export function useSearch({ title, genres = [] }){
	const [ SearchAnime, setSearchAnime ] = useState([]);
	const [ FilterAnime, setFilterAnime ] = useState([]);
	const [ Rated, setRated ] = useState(false);
	const [ Option, setOption ] = useState('All');

	const handleChangeRated = () => setRated(!Rated);

	const handleChangeOption = e => setOption(e.target.value);

	useEffect(
		() => {
			if (!title) {
				setSearchAnime([]);
				return;
			}

			title.length >= 4
				? getSearch({ title, limit: 25, genres }).then(res => {
						setSearchAnime(res.results);
						setFilterAnime(res.results);
					})
				: setSearchAnime([]);
		},
		[ title, genres ],
	);

	useEffect(
		() => {
			const animes = filterAnimes({
				seasonAnimes: SearchAnime,
				option: Option,
				rated: Rated,
			});
			setFilterAnime(animes);
		},
		[ SearchAnime, Rated, Option ],
	);

	return {
		SearchAnime: FilterAnime,
		handleChangeRated,
		handleChangeOption,
		Option,
		Rated,
	};
}
