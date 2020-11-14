import { API_URL } from '../utils/settings';

export async function getAllProducerAnime({ id, Page = 1 }){
	const apiRL = `${API_URL}/producer/${id}/${Page}`;
	return await fetch(apiRL).then(res => res.json()).then(res => res);
}
