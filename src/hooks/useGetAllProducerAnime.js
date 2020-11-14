import { useEffect, useState } from 'react';
import { getAllProducerAnime } from '../services/getAllProducerAnime';
import { Objec_Genres } from '../utils/models';

export function useGetAllProducerAnime({ id }){
	const [ Loading, setLoading ] = useState(false);
	const [ Animes, setAnimes ] = useState([]);
	const [ Producer, setProducer ] = useState({
		meta: new Object(Objec_Genres),
	});

	useEffect(
		() => {
			setLoading(true);
			getAllProducerAnime({ id })
				.then(res => {
					setAnimes(res.anime);
					setProducer({
						meta: res.meta,
					});
					setLoading(false);
				})
				.catch(res => {
					setLoading(false);
				});
		},
		[ id ],
	);

	return {
		Animes,
		Producer,
		Loading,
	};
}
