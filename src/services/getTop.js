import { API_URL } from '../utils/settings';

const fromApiResponseTop = apiResponse => {
	const { top } = apiResponse;
	return { top };
};

export async function getTop({ type = 'anime', page = 1, subtype = '' } = {}){
	let apiURL;
	if (subtype !== 'all') {
		apiURL = `${API_URL}/top/${type}/${page}/${subtype}`;
	}
	else {
		apiURL = `${API_URL}/top/${type}/${page}`;
	}
	return await fetch(apiURL).then(res => res.json()).then(fromApiResponseTop);
}
