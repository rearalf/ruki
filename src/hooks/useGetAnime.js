import { useEffect, useState } from 'react';
import { getAnime, getAnimeCharactersStaff } from '../services/getAnime';
import { objeto_anime } from '../utils/models';

export function useGetAnime({ id }){
	const [ Anime, setAnime ] = useState(objeto_anime);
	const [ loading, setLoading ] = useState(false);
	const [ Characters, setCharacters ] = useState([]);
	const [ Watched, setWatched ] = useState(false);

	useEffect(
		() => {
			setLoading(true);
			getAnime({ id })
				.then(res => {
					setAnime(res);
					setLoading(false);
				})
				.catch(res => {
					setLoading(false);
				});

			getAnimeCharactersStaff({ id }).then(res => {
				setCharacters(res.characters);
			});
		},
		[ id ],
	);

	return {
		Anime,
		loading,
		Characters,
		Watched,
		setWatched,
	};
}
