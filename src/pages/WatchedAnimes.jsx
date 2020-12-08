import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { ListCard } from '../components/ListCard';
import ContextUser from '../context/user';
import { AllWatchedAnimes } from '../services/getWatchedAnimes';
import imgLoading from '../assets/static/loading.gif';

export const WatchedAnimes = () => {
	const { replace } = useHistory();
	const User = useContext(ContextUser);
	const [ Animes, setAnimes ] = useState([]);
	const [ Loading, setLoading ] = useState(false);

	useEffect(
		() => {
			setLoading(true);
			!User
				? null
				: AllWatchedAnimes({ id_user: User.uid }).then(animes => {
						setAnimes(animes);
						setLoading(false);
					});
		},
		[ User ],
	);

	if (!User) replace('/');

	return (
		<Layout>
			<Header title="Watched Animes" description="All watched animes" />
			<h1>Watched Anime</h1>
			{Loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : Animes.length ? (
				<ListCard list={Animes} />
			) : (
				<h2>No anime seen</h2>
			)}
		</Layout>
	);
};
