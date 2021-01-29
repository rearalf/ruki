import React, { Fragment, useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ListCard } from '../components/ListCard';
import { useGetAllGenreAnime } from '../hooks/useGetAllGenreAnime';
import { Header } from '../components/Header';
import { ChangeTypeRated } from '../components/ChangeTypeRated';
import { useNearScreen } from '../hooks/useNearScreen';
import imgLoading from '../assets/static/loading.gif';
import debounce from 'just-debounce-it';

export const AnimeGenre = () => {
	const { id } = useParams();
	const {
		Animes,
		Genre,
		Loading,
		setPage,
		loadingNextPage,
		handleChangeRated,
		handleChangeOption,
		Option,
		Rated,
	} = useGetAllGenreAnime({ id });
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
					<ChangeTypeRated
						Option={Option}
						Rated={Rated}
						handleChangeOption={handleChangeOption}
						handleChangeRated={handleChangeRated}
					/>
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
