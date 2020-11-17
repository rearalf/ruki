import { useEffect, useState } from 'react';
import { getAllGenresAnime } from '../services/getAllGenresAnime';
import { Objec_Genres } from '../utils/models';

export function useGetAllGenreAnime({ id }){
	const [ Loading, setLoading ] = useState(false);
	const [ Page, setPage ] = useState(1);
	const [ Animes, setAnimes ] = useState([]);
	const [ Genre, setGenre ] = useState({
		mal_url: new Object(Objec_Genres),
		item_count: Number,
	});

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
			getAllGenresAnime({ id, Page }).then(res => {
				if (res.anime !== undefined) {
					setAnimes(animes => animes.concat(res.anime));
				}
			});
		},
		[ Page, id ],
	);

	return {
		Animes,
		Genre,
		Loading,
		setPage,
	};
}
