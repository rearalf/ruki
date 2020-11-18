import React, { Fragment, useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ListCard } from '../components/ListCard';
import { useGetAllProducerAnime } from '../hooks/useGetAllProducerAnime';
import { Header } from '../components/Header';
import { useNearScreen } from '../hooks/useNearScreen';
import debounce from 'just-debounce-it';
import imgLoading from '../assets/static/loading.gif';

export const AnimeProducer = () => {
	const { id } = useParams();
	const { Animes, Producer, Loading, setPage, loadingNextPage } = useGetAllProducerAnime({ id });
	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({
		externalRef: Loading ? null : externalRef,
		once: false,
	});

	const debounceHandleNextPage = useCallback(
		debounce(() => setPage(prevPage => prevPage + 1), 1000),
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
				title={Producer.meta.name}
				description={`Find all ${Producer.meta.name} anime`}
			/>
			{Loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : (
				<Fragment>
					<h1>{Producer.meta.name}</h1>
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
