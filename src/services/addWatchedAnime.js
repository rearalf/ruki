import { API_RUKI_BACKEND } from '../utils/settings';

export const AddWatchedAnime = ({ id_user, mal_id, image_url, title, type, score, genres }) => {
	const API = `${API_RUKI_BACKEND}/api/anime/`;
	const myHeaders = new Headers({
		'Content-Type': 'application/json',
		authorization: localStorage.getItem('token'),
	});
	return fetch(API, {
		method: 'POST',
		body: JSON.stringify({ id_user, mal_id, image_url, title, type, score, genres }),
		headers: myHeaders,
		mode: 'cors',
	})
		.then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => {
			return {
				message: response.message,
				data: response.data,
			};
		});
};
