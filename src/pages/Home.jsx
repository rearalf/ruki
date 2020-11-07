import React, { Fragment } from 'react';
import { ListCard } from '../components/ListCard';
import { Pagination } from '../components/Pagination';
import { AllAnime } from '../hooks/useGetAllAnime';
import { Layout } from '../components/Layout';
import imgLoading from '../assets/static/loading.gif';

export const Home = () => {
	const { setPage, ListAnimes, Page, loading } = AllAnime();

	return (
		<Layout>
			{loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : ListAnimes.length ? (
				<Fragment>
					<ListCard list={ListAnimes[Page]} />
					<Pagination TotalAnime={ListAnimes.length} Page={Page} setPage={setPage} />
				</Fragment>
			) : (
				<h1>Not found</h1>
			)}
		</Layout>
	);
};