import { useEffect, useState } from 'react';
import { getAnime } from '../services/getAnime';
import { objeto_anime } from '../utils/models';

export function useGetAnime({ id }){
	const [ Anime, setAnime ] = useState(objeto_anime);
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		setLoading(true);
		getAnime({ id })
			.then(res => {
				setAnime(res);
				setLoading(false);
			})
			.catch(res => {
				setLoading(false);
			});
	}, []);

	return {
		Anime,
		loading,
	};
}
