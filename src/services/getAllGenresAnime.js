import { API_URL } from '../utils/settings';

export async function getAllGenresAnime({ id, Page = 1 }){
	const apiRL = `${API_URL}/genre/anime/${id}/${Page}`;
	return await fetch(apiRL).then(res => res.json()).then(res => res);
}
