import { API_URL } from '@utils/settings';

const fromApiResponseToSeason = apiResponse => {
	const { archive } = apiResponse;
	return archive;
};

export async function SeasonArchive(){
	const apiRL = `${API_URL}/season/archive`;
	return await fetch(apiRL).then(res => res.json()).then(fromApiResponseToSeason);
}
