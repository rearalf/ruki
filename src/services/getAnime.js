import { API_URL } from '../utils/settings';

export async function getAnime({ id }){
	const apiRL = `${API_URL}/anime/${id}`;
	return await fetch(apiRL).then(res => res.json()).then(res => res);
}
