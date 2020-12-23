import { API_URL, getDate } from '../utils/settings';

const fromApiResponseToSeason = apiResponse => {
	const { anime, season_name, season_year } = apiResponse;
	return {
		anime,
		season_name,
		season_year,
	};
};

export async function getSeason(){
	const { CurrentYear, CurrentSeason } = getDate();

	const apiRL = `${API_URL}/season/${CurrentYear}/${CurrentSeason}`;

	return await fetch(apiRL).then(res => res.json()).then(fromApiResponseToSeason);
}
