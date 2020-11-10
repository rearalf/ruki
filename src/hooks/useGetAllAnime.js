import { useEffect, useState } from 'react';
import { getSeason } from '../services/getData';
import { Object_Anime } from '../utils/models';
import { sortData } from '../utils/sortData';

export function AllAnime(){
	const [ AnimeSeason, setAnimeSeason ] = useState(Object_Anime);
	const [ ListAnimes, setListAnimes ] = useState([]);
	const [ Page, setPage ] = useState(0);
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		setLoading(true);
		getSeason()
			.then(res => {
				setAnimeSeason(res);
				setLoading(false);
			})
			.catch(res => {
				setLoading(false);
			});
	}, []);

	useEffect(
		() => {
			const { arregloDeArreglos } = sortData({
				data: AnimeSeason.anime,
			});
			setListAnimes(arregloDeArreglos);
		},
		[ AnimeSeason.anime ],
	);
	return {
		setPage,
		Page,
		ListAnimes,
		loading,
		season_name: AnimeSeason.season_name,
		season_year: AnimeSeason.season_year,
	};
}
