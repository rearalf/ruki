import { useEffect, useState } from 'react';
import { getSeason } from '../services/getSeason';
import { Object_Anime } from '../utils/models';
import { SeasonArchive } from '../services/getSeasonArchive';
import { getSeasonLater } from '../services/getSeasonLater';

export function GetSeasonAnime(){
	const [ AnimeSeason, setAnimeSeason ] = useState(Object_Anime);
	const [ Loading, setLoading ] = useState(false);

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

	return {
		Loading,
		season_name: AnimeSeason.season_name,
		season_year: AnimeSeason.season_year,
		Animes: AnimeSeason.anime,
	};
}

export function useGetSeasonalLater(){
	const [ SeasonalLater, setSeasonalLater ] = useState({
		anime: [],
		season_name: '',
	});

	useEffect(() => {
		getSeasonLater().then(res => {
			setSeasonalLater(res);
		});
	}, []);

	return {
		AnimesLater: SeasonalLater.anime,
		SeasonName: SeasonalLater.season_name,
	};
}

export function useGetSeasonArchive({ NumberSeason = 6 } = {}){
	const [ Archive, setArchive ] = useState([]);

	useEffect(() => {
		SeasonArchive().then(res => {
			for (let i = 0; i < NumberSeason; i++) {
				let seasons = res[i].seasons;
				let year = res[i].year;
				for (let l = 0; l < seasons.length; l++) {
					let season = { season: seasons[l], year };
					setArchive(Archive => Archive.concat(season));
				}
			}
		});
	}, []);

	return {
		Archive,
	};
}

export function useGetSeasonEspecific({ year = 0, season = '' } = {}){
	const [ AnimeSeason, setAnimeSeason ] = useState(Object_Anime);
	const [ Loading, setLoading ] = useState(false);

	useEffect(
		() => {
			setLoading(true);
			if (year === 'later') {
				getSeasonLater().then(res => {
					setAnimeSeason(res);
					setLoading(false);
				});
			}
			else {
				getSeason({ year, season }).then(res => {
					setAnimeSeason(res);
					setLoading(false);
				});
			}
		},
		[ season, year ],
	);

	return {
		Loading,
		season_name: AnimeSeason.season_name,
		season_year: AnimeSeason.season_year,
		Animes: AnimeSeason.anime,
	};
}
