import React, { Fragment } from 'react';
import { ListCard } from '../components/ListCard';
import { Pagination } from '../components/Pagination';
import { AllAnime } from '../hooks/useGetAllAnime';
import imgLoading from '../assets/static/loading.gif';

export const Home = () => {
	const { setPage, ListAnimes, Page, loading } = AllAnime();

	return (
		<Fragment>
			{loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : (
				<Fragment>
					<ListCard list={ListAnimes[Page]} />
					<Pagination TotalAnime={ListAnimes.length} Page={Page} setPage={setPage} />
				</Fragment>
			)}
		</Fragment>
	);
};
