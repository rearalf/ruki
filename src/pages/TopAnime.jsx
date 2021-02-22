import React, { Fragment } from 'react';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { useGetTop } from '../hooks/useGetTop';
import { ListCard } from '../components/ListCard';
import imgLoading from '../assets/static/loading.gif';

export const TopAnime = () => {
	const { Top, Loading, Option, handleChangeOption, loadingNextPage, externalRef } = useGetTop();

	return (
		<Layout>
			<Header title="To Anime" />
			<h1 className="mb-1">Top Animes</h1>
			<select
				className="inputBasic"
				name="seasons"
				id="seasons"
				onChange={handleChangeOption}
				value={Option}>
				<option value="all">All</option>
				<option value="tv">TV</option>
				<option value="airing">Airing</option>
				<option value="upcoming">Upcoming</option>
				<option value="ova">OVA</option>
				<option value="movie">Movie</option>
				<option value="special">Special</option>
				<option value="bypopularity">Most Popular</option>
				<option value="favorite">Most Favorited</option>
			</select>
			{Loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : (
				<Fragment>
					<ListCard list={Top} />
					{loadingNextPage && (
						<div className="ImgLoading">
							<img src={imgLoading} alt="loading" />
						</div>
					)}
					<div id="visor" ref={externalRef} />
				</Fragment>
			)}
		</Layout>
	);
};
