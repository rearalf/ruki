import { useEffect, useState } from 'react';
import { getManga } from '../services/getManga';
import { Object_Manga } from '../utils/models';

export function useGetManga({ id }){
	const [ Manga, setManga ] = useState(Object_Manga);
	const [ loading, setLoading ] = useState(false);

	useEffect(
		() => {
			setLoading(true);
			getManga({ id })
				.then(res => {
					setManga(res);
					setLoading(false);
				})
				.catch(res => {
					setLoading(false);
				});
		},
		[ id ],
	);

	return {
		Manga,
		loading,
	};
}
