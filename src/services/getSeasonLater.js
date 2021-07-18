import { API_URL } from '@utils/settings';

const fromApiResponseToSeason = apiResponse => {
	const { anime, season_name } = apiResponse;
	return {
		anime,
		season_name,
	};
};

export async function getSeasonLater(){
	const apiRL = `${API_URL}/season/later`;

	return await fetch(apiRL).then(res => res.json()).then(fromApiResponseToSeason);
}
