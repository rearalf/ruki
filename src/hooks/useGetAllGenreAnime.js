import { useEffect, useState } from 'react';
import { getAllGenresAnime } from '../services/getAllGenresAnime';
import { Objec_Genres } from '../utils/models';
import { filterAnimes } from './useGetSeasonAnime';

export function useGetAllGenreAnime({ id }){
	const [ Loading, setLoading ] = useState(false);
	const [ loadingNextPage, setLoadingNextPage ] = useState(false);
	const [ Page, setPage ] = useState(1);
	const [ Animes, setAnimes ] = useState([]);
	const [ FilterAnime, setFilterAnime ] = useState([]);
	const [ Rated, setRated ] = useState(false);
	const [ Option, setOption ] = useState('All');
	const [ Genre, setGenre ] = useState({
		mal_url: new Object(Objec_Genres),
		item_count: Number,
	});

	const handleChangeRated = () => setRated(!Rated);

	const handleChangeOption = e => setOption(e.target.value);

	useEffect(
		() => {
			setLoading(true);
			getAllGenresAnime({ id })
				.then(res => {
					setAnimes(res.anime);
					setGenre({
						mal_url: res.mal_url,
						item_count: res.item_count,
					});
					setLoading(false);
				})
				.catch(res => {
					setLoading(false);
				});
		},
		[ id ],
	);

	useEffect(
		() => {
			if (Page === 1) return;
			setLoadingNextPage(true);
			getAllGenresAnime({ id, Page })
				.then(res => {
					if (res.anime !== undefined) {
						setAnimes(animes => animes.concat(res.anime));
						setLoadingNextPage(false);
					}
					else {
						setLoadingNextPage(false);
					}
				})
				.catch(res => {
					setLoadingNextPage(false);
				});
		},
		[ Page, id ],
	);

	useEffect(
		() => {
			const animes = filterAnimes({
				seasonAnimes: Animes,
				option: Option,
				rated: Rated,
			});
			setFilterAnime(animes);
		},
		[ Page, Animes, Rated, Option ],
	);

	return {
		Animes: FilterAnime,
		Genre,
		Loading,
		setPage,
		loadingNextPage,
		handleChangeRated,
		handleChangeOption,
		Option,
		Rated,
	};
}
