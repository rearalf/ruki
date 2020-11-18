import React, { Fragment, useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ListCard } from '../components/ListCard';
import { useGetAllGenreAnime } from '../hooks/useGetAllGenreAnime';
import { Header } from '../components/Header';
import imgLoading from '../assets/static/loading.gif';
import debounce from 'just-debounce-it';
import { useNearScreen } from '../hooks/useNearScreen';

export const AnimeGenre = () => {
	const { id } = useParams();
	const { Animes, Genre, Loading, setPage, loadingNextPage } = useGetAllGenreAnime({ id });
	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({
		externalRef: Loading ? null : externalRef,
		once: false,
	});

	const debounceHandleNextPage = useCallback(
		debounce(() => setPage(prevPage => prevPage + 1), 200),
		[ setPage ],
	);

	useEffect(
		() => {
			if (isNearScreen) debounceHandleNextPage();
		},
		[ isNearScreen, debounceHandleNextPage ],
	);

	return (
		<Layout>
			<Header
				title={Genre.mal_url.name}
				description={`Find all ${Genre.mal_url.name} anime`}
			/>
			{Loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : (
				<Fragment>
					<h1>{Genre.mal_url.name}</h1>
					<ListCard list={Animes} />
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
