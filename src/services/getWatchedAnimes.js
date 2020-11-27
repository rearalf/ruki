export const AllWatchedAnimes = ({ id_user = '' }) => {
	const API = `${process.env.API_RUKI_BACKEND}/api/anime/${id_user}`;
	const myHeaders = new Headers({
		'Content-Type': 'application/json',
		authorization: localStorage.getItem('token'),
	});
	return fetch(API, {
		method: 'GET',
		headers: myHeaders,
		mode: 'cors',
	})
		.then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => {
			const { AllAnimes } = response;
			return AllAnimes;
		});
};
