import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ListCard } from '../components/ListCard';
import { useGetAllGenreAnime } from '../hooks/useGetAllGenreAnime';
import { Header } from '../components/Header';
import { ChangeTypeRated } from '../components/ChangeTypeRated';
import imgLoading from '../assets/static/loading.gif';

export const AnimeGenre = () => {
	const { id } = useParams();
	const {
		Animes,
		Genre,
		Loading,
		loadingNextPage,
		externalRef,
		handleChangeRated,
		handleChangeOption,
		Option,
		Rated,
	} = useGetAllGenreAnime({ id });

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
