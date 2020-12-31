import { API_URL, getDate } from '../utils/settings';

const fromApiResponseToSeason = apiResponse => {
	const { anime, season_name, season_year } = apiResponse;
	return {
		anime,
		season_name,
		season_year,
	};
};

export async function getSeason({ year = 0, season = '' } = {}){
	let apiURL;
	if (year === 0) {
		const { CurrentYear, CurrentSeason } = getDate();
		apiURL = `${API_URL}/season/${CurrentYear}/${CurrentSeason}`;
	}
	else {
		apiURL = `${API_URL}/season/${year}/${season}`;
	}
	return await fetch(apiURL).then(res => res.json()).then(fromApiResponseToSeason);
}
