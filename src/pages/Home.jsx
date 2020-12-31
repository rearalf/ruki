import React, { Fragment } from 'react';
import { ListCard } from '../components/ListCard';
import { GetSeasonAnime } from '../hooks/useGetSeasonAnime';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import imgLoading from '../assets/static/loading.gif';

export const Home = () => {
	const { Loading, Animes, season_name, season_year } = GetSeasonAnime();

	return (
		<Layout>
			<Header title="Home" description="Home the ruki" />
			{Loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : Animes.length ? (
				<Fragment>
					<h1>{`${season_name} ${season_year} Anime`}</h1>
					<ListCard list={Animes} />
				</Fragment>
			) : (
				<h1>Not found</h1>
			)}
		</Layout>
	);
};
