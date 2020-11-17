import { useEffect, useState } from 'react';
import { getAllProducerAnime } from '../services/getAllProducerAnime';
import { Objec_Genres } from '../utils/models';

export function useGetAllProducerAnime({ id }){
	const [ Loading, setLoading ] = useState(false);
	const [ Page, setPage ] = useState(1);
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

	useEffect(
		() => {
			if (Page === 1) return;
			getAllProducerAnime({ id, Page }).then(res => {
				if (res.anime !== undefined) {
					setAnimes(animes => animes.concat(res.anime));
				}
			});
		},
		[ Page, id ],
	);

	return {
		Animes,
		Producer,
		Loading,
		setPage,
		Page,
	};
}
