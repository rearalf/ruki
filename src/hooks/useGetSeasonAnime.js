import { useEffect, useState } from 'react';
import { getSeason } from '../services/getSeason';
import { Object_Anime } from '../utils/models';
import { SeasonArchive } from '../services/getSeasonArchive';
import { getSeasonLater } from '../services/getSeasonLater';

export function GetSeasonAnime(){
	const [ SeasonAnime, setSeasonAnime ] = useState(Object_Anime);
	const [ Loading, setLoading ] = useState(false);
	const [ FilterAnime, setFilterAnime ] = useState([]);
	const [ Rated, setRated ] = useState(false);
	const [ Option, setOption ] = useState('All');

	const handleChangeRated = () => setRated(!Rated);

	const handleChangeOption = e => setOption(e.target.value);

	useEffect(() => {
		setLoading(true);
		getSeason()
			.then(res => {
				setSeasonAnime(res);
				setFilterAnime(res);
				setLoading(false);
			})
			.catch(res => {
				setLoading(false);
			});
	}, []);

	useEffect(
		() => {
			const animes = filterAnimes({
				seasonAnimes: SeasonAnime.anime,
				option: Option,
				rated: Rated,
			});
			setFilterAnime(animes);
		},
		[ SeasonAnime, Rated, Option ],
	);

	return {
		Loading,
		season_name: SeasonAnime.season_name,
		season_year: SeasonAnime.season_year,
		Animes: FilterAnime,
		handleChangeRated,
		handleChangeOption,
		Option,
		Rated,
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
	const [ SeasonAnime, setSeasonAnime ] = useState(Object_Anime);
	const [ Loading, setLoading ] = useState(false);
	const [ FilterAnime, setFilterAnime ] = useState([]);
	const [ Rated, setRated ] = useState(false);
	const [ Option, setOption ] = useState('All');

	const handleChangeRated = () => setRated(!Rated);

	const handleChangeOption = e => setOption(e.target.value);

	useEffect(
		() => {
			setLoading(true);
			if (year === 'later') {
				getSeasonLater().then(res => {
					setSeasonAnime(res);
					setLoading(false);
				});
			}
			else {
				getSeason({ year, season }).then(res => {
					setSeasonAnime(res);
					setFilterAnime(res.anime);
					setLoading(false);
				});
			}
		},
		[ season, year ],
	);

	useEffect(
		() => {
			const animes = filterAnimes({
				seasonAnimes: SeasonAnime.anime,
				option: Option,
				rated: Rated,
			});
			setFilterAnime(animes);
		},
		[ SeasonAnime, Rated, Option ],
	);

	return {
		Loading,
		season_name: SeasonAnime.season_name,
		season_year: SeasonAnime.season_year,
		Animes: FilterAnime,
		handleChangeRated,
		handleChangeOption,
		Option,
		Rated,
	};
}

export const filterAnimes = ({ seasonAnimes = [], option, rated } = {}) => {
	if (option !== 'All') {
		const animes = seasonAnimes.filter(anime => {
			if (rated) {
				return anime.type === option;
			}
			else {
				return anime.type === option && !anime.r18;
			}
		});
		return animes;
	}
	else {
		const animes = seasonAnimes.filter(anime => {
			if (rated) {
				return anime;
			}
			else {
				return !anime.r18;
			}
		});
		return animes;
	}
};
