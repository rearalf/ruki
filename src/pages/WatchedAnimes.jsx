import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ListCard } from '../components/ListCard';
import ContextUser from '../context/user';
import { AllWatchedAnimes } from '../services/getWatchedAnimes';

export const WatchedAnimes = () => {
	const { replace } = useHistory();
	const User = useContext(ContextUser);
	const [ Animes, setAnimes ] = useState([]);

	useEffect(
		() => {
			!User
				? null
				: AllWatchedAnimes({ id_user: User.uid }).then(animes => {
						setAnimes(animes);
					});
		},
		[ User ],
	);

	if (!User) replace('/');

	return (
		<Layout>
			<h1>Watched Anime</h1>
			{Animes.length ? <ListCard list={Animes} /> : <h2>No anime seen</h2>}
		</Layout>
	);
};
