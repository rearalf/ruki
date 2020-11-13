import { useEffect, useState } from 'react';
import { getAnime } from '../services/getAllGenres';
import { Objec_Genres } from '../utils/models';

export function useGetAllGenreAnime({ id }){
	const [ Loading, setLoading ] = useState(false);
	const [ Animes, setAnimes ] = useState([]);
	const [ Genre, setGenre ] = useState({
		mal_url: new Object(Objec_Genres),
		item_count: Number,
	});

	useEffect(
		() => {
			setLoading(true);
			getAnime({ id })
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

	return {
		Animes,
		Genre,
		Loading,
	};
}
