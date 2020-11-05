import React from 'react';
import { Star } from './Icons/Start';
import '../assets/styles/components/Card.sass';

export const Card = ({ Title = '', Img = '', Score = 0, Genres = [], DateStart = '' }) => {
	return (
		<article className="ArticleAnime">
			<div className="ContentInfoImg">
				<img src={Img} alt={Title} />
				<div className="score">
					<Star Fill="#FFF" />
					<span>{Score ? Score : 0}</span>
				</div>
			</div>
			<div className="ContentInfoText">
				<h1>{Title}</h1>
				<h2>Fecha estreno: {new Date(DateStart).toDateString()}</h2>
				<h3>Generos</h3>
				<div className="Genres">
					{Genres.map(({ name }) => <span key={name}>{name}</span>)}
				</div>
			</div>
		</article>
	);
};
