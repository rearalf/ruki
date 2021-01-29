import React, { Fragment } from 'react';
import { ListCard } from '../components/ListCard';
import { GetSeasonAnime } from '../hooks/useGetSeasonAnime';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import imgLoading from '../assets/static/loading.gif';
import { ChangeTypeRated } from '../components/ChangeTypeRated';

export const Home = () => {
	const {
		Loading,
		Animes,
		season_name,
		season_year,
		Option,
		Rated,
		handleChangeOption,
		handleChangeRated,
	} = GetSeasonAnime();

	return (
		<Layout>
			<Header title="Home" description="Home the ruki" />
			{Loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : Animes.length ? (
				<Fragment>
					<div className="mb-2 changeParameters">
						<h1 className="mb-1">{`${season_name} ${season_year} Anime`}</h1>
						<ChangeTypeRated
							Option={Option}
							Rated={Rated}
							handleChangeOption={handleChangeOption}
							handleChangeRated={handleChangeRated}
						/>
					</div>
					<ListCard list={Animes} />
				</Fragment>
			) : (
				<h1>Not found</h1>
			)}
		</Layout>
	);
};
