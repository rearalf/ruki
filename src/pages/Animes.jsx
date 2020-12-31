import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Genres, Studios } from '../utils/models';
import { Header } from '../components/Header';
import { useGetSeasonArchive } from '../hooks/useGetSeasonAnime';
import '../assets/styles/components/Animes.sass';

export const Animes = () => {
	const { Archive } = useGetSeasonArchive();
	return (
		<Layout>
			<Header title="Anime" description="Search anime by genre" />
			<h1>Anime classification</h1>
			<section className="sectionAnimeClassification">
				<h2 className="mb-1">Genres</h2>
				<div className="listAnimeClassification">
					{Genres.map((item, i) => (
						<Link
							to={`/anime/genre/${i + 1}`}
							key={i + 1}
							className="linkAnimeClassification">
							{item}
						</Link>
					))}
				</div>
			</section>
			<section className="sectionAnimeClassification">
				<h2 className="mb-1">Studios</h2>
				<div className="listAnimeClassification">
					{Studios.map(({ name, mal_id }) => (
						<Link
							to={`/anime/producer/${mal_id}`}
							key={mal_id}
							className="linkAnimeClassification">
							{name}
						</Link>
					))}
				</div>
			</section>
			<section className="sectionAnimeClassification">
				<h2 className="mb-1">Anime Seasons</h2>
				<div className="listAnimeClassification">
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
		</Layout>
	);
};
