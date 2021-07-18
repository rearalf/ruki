import { useCallback, useEffect, useRef, useState } from 'react';
import { getAllGenresAnime } from '@services/getAllGenresAnime';
import { Objec_Genres } from '@utils/models';
import { filterAnimes } from './useGetSeasonAnime';
import { useNearScreen } from './useNearScreen';
import debounce from 'just-debounce-it';

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

	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({
		externalRef: Loading ? null : externalRef,
		once: false,
	});

	const debounceHandleNextPage = useCallback(
		debounce(() => setPage(prevPage => prevPage + 1), 200),
		[ setPage ],
	);

	useEffect(
		() => {
			if (isNearScreen) debounceHandleNextPage();
		},
		[ isNearScreen, debounceHandleNextPage ],
	);

	return {
		Animes: FilterAnime,
		Genre,
		Loading,
		loadingNextPage,
		externalRef,
		handleChangeRated,
		handleChangeOption,
		Option,
		Rated,
	};
}
