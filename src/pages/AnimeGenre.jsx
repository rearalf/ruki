import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ListCard } from '../components/ListCard';
import { useGetAllGenreAnime } from '../hooks/useGetAllGenreAnime';
import { Header } from '../components/Header';
import imgLoading from '../assets/static/loading.gif';

export const AnimeGenre = () => {
	const { id } = useParams();
	const { Animes, Genre, Loading } = useGetAllGenreAnime({ id });
	return (
		<Layout>
			{Loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : (
				<Fragment>
					<Header
						title={Genre.mal_url.name}
						description={`Find all ${Genre.mal_url.name} anime`}
					/>
					<h1>{Genre.mal_url.name}</h1>
					<ListCard list={Animes} />
				</Fragment>
			)}
		</Layout>
	);
};
