import { API_URL } from '../utils/settings';

export async function getSearch({
	typeSearch = 'anime',
	title = '',
	rate = 'pg13',
	limit = 5,
	order_by = 'title',
}){
	const apiRL = `${API_URL}/search/${typeSearch}?q=${title}?rated=${rate}&limit=${limit}&order_by=${order_by}`;
	return await fetch(apiRL).then(res => res.json()).then(res => res);
}
