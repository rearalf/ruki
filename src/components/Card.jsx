import React, { Fragment } from 'react';
import { Star } from './Icons/Star';
import '../assets/styles/components/Card.sass';
import { Link } from 'react-router-dom';

export const Card = ({ Title = '', Img = '', Score = 0, Genres = [], DateStart = '', id = 0 }) => {
	return (
		<article className="ArticleAnime">
			<Link to={`/anime/${id}`}>
				<div className="ContentInfoImg">
					<img src={Img} alt={Title} />
					<div className="score">
						<Star Fill="#FFF" />
						<span>{Score ? Score : 0}</span>
					</div>
				</div>
			</Link>
			<div className="ContentInfoText">
				<Link to={`/anime/${id}`}>
					<h1>{Title}</h1>
				</Link>
				{DateStart && <h2>Fecha estreno: {new Date(DateStart).toDateString()}</h2>}
				{Genres.length !== 0 && (
					<Fragment>
						<h3>Generos: </h3>
						<div className="Genres">
							{Genres.map(({ name, type, mal_id }) => (
								<Link
									to={`/${type}/genre/${mal_id}`}
									className="genre"
									key={mal_id}>
									{name}
								</Link>
							))}
						</div>
					</Fragment>
				)}
			</div>
		</article>
	);
};
