import { API_URL } from '../utils/settings';

export async function getManga({ id }){
	const apiRL = `${API_URL}/manga/${id}`;
	return await fetch(apiRL).then(res => res.json()).then(res => res);
}
