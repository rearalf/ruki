import { useEffect, useState } from 'react';
import { getSearch } from '../services/getSearch';

export function useSearch({ title }){
	const [ SearchAnime, setSearchAnime ] = useState({});

	useEffect(
		() => {
			getSearch({ title }).then(res => {
				console.log(res);
			});
		},
		[ title ],
	);

	return {
		SearchAnime,
	};
}
