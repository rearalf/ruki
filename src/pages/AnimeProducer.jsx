import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ListCard } from '../components/ListCard';
import { useGetAllProducerAnime } from '../hooks/useGetAllProducerAnime';
import { Header } from '../components/Header';
import { ChangeTypeRated } from '../components/ChangeTypeRated';
import imgLoading from '../assets/static/loading.gif';

export const AnimeProducer = () => {
	const { id } = useParams();
	const {
		Animes,
		Producer,
		Loading,
		loadingNextPage,
		externalRef,
		handleChangeRated,
		handleChangeOption,
		Option,
		Rated,
	} = useGetAllProducerAnime({ id });

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
