import React, { Fragment } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { ListCard } from '@components/ListCard';
import { Header } from '@components/Header';
import { useGetSeasonArchive, useGetSeasonEspecific } from '@hooks/useGetSeasonAnime';
import { ChangeTypeRated } from '@components/ChangeTypeRated';
import { SearchIcon } from '@components/Icons/SearchIcon';
import imgLoading from '@static/loading.gif';
import '@styles/components/SeasonAnime.sass';

export const SeasonAnime = () => {
	const history = useHistory();
	const { year, season } = useParams();

	const { Archive } = useGetSeasonArchive({ NumberSeason: 4 });
	const {
		Loading,
		Animes,
		season_name,
		season_year,
		handleChangeOption,
		handleChangeRated,
		Option,
		Rated,
	} = useGetSeasonEspecific({
		season,
		year,
	});

	const handleSearchSeason = e => {
		e.preventDefault();
		const f = new Date();
		const inputYear = e.target[0];
		const season = e.target[1].value;
		if (inputYear.value >= 1917 && inputYear.value <= f.getFullYear() + 1) {
			history.push(`/anime/season/${inputYear.value}/${season}`);
			inputYear.value = '';
		}
	};

	return (
		<Layout>
			<Header
				title={`Season ${season} ${year}`}
				description={`Todos los animes de la temporada de ${season} del anño ${year}`}
			/>
			<div className="seasonsHeaders">
				<section className="sectionAnimeClassification">
					<div className="listAnimeClassification">
						<Link to={'/anime/season/later'} className="linkAnimeClassification">
							Later
						</Link>
						{Archive.map(({ year, season }, index) => (
							<Link
								to={`/anime/season/${year}/${season.toLowerCase()}`}
								key={index}
								className="linkAnimeClassification">
								{season + ' ' + year}
							</Link>
						))}
					</div>
				</section>
				<div className="mb-2 changeParameters">
					<form onSubmit={handleSearchSeason} className="seasonsForm">
						<input type="number" placeholder="Year" className="inputBasic" />
						<select className="inputBasic" name="seasons" id="seasons">
							<option value="winter">Winter</option>
							<option value="summer">Summer</option>
							<option value="spring">Spring</option>
							<option value="fall">Fall</option>
						</select>
						<button className="btnSeasonForm">
							<SearchIcon />
							Search season
						</button>
					</form>
					<ChangeTypeRated
						Option={Option}
						Rated={Rated}
						handleChangeOption={handleChangeOption}
						handleChangeRated={handleChangeRated}
					/>
				</div>
			</div>
			{Loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : Animes.length ? (
				<Fragment>
					<h1>{`${season_name} ${season_year !== 'undefined'
						? ''
						: season_year} Anime`}</h1>
					<ListCard list={Animes} />
				</Fragment>
			) : (
				<h1>Not found</h1>
			)}
		</Layout>
	);
};
