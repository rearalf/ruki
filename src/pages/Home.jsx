import React, { Fragment } from 'react';
import { ListCard } from '../components/ListCard';
import { Pagination } from '../components/Pagination';
import { SeasonAnime } from '../hooks/useGetSeasonAnime';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import imgLoading from '../assets/static/loading.gif';

export const Home = () => {
	const { setPage, ListAnimes, Page, loading, season_name, season_year } = SeasonAnime();

	return (
		<Layout>
			<Header title="Home" description="Home the ruki" />
			{loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : ListAnimes.length ? (
				<Fragment>
					<h1>{`${season_name} ${season_year} Anime`}</h1>
					<ListCard list={ListAnimes[Page]} />
					<Pagination TotalAnime={ListAnimes.length} Page={Page} setPage={setPage} />
				</Fragment>
			) : (
				<h1>Not found</h1>
			)}
		</Layout>
	);
};
