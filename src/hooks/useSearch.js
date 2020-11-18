import { useEffect, useState } from 'react';
import { getSearch } from '../services/getSearch';

export function useSearch({ title, genres = [] }){
	const [ SearchAnime, setSearchAnime ] = useState([]);

	useEffect(
		() => {
			if (!title) {
				setSearchAnime([]);
				return;
			}

			title.length >= 4
				? getSearch({ title, limit: 25, genres }).then(res => {
						setSearchAnime(res.results);
					})
				: setSearchAnime([]);
		},
		[ title, genres ],
	);

	return {
		SearchAnime,
	};
}
