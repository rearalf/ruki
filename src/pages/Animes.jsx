import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { genres } from '../utils/models';
import { Header } from '../components/Header';
import '../assets/styles/components/Animes.sass';

export const Animes = () => {
	return (
		<Layout>
			<Header title="Anime" description="Search anime by genre" />
			<h1>Animes Clasificaciones</h1>
			<h2>Genres</h2>
			<div className="contentListGenres">
				{genres.map((item, i) => {
					return (
						<Link to={`/anime/genre/${i + 1}`} key={i + 1} className="genresInput">
							{item}
						</Link>
					);
				})}
			</div>
		</Layout>
	);
};
