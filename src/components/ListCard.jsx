import React from 'react';
import '../assets/styles/components/ListCard.sass';
import { Card } from './Card';

export const ListCard = ({ list = [] }) => {
	return (
		<section className="ListContent">
			{list &&
				list.map(list => (
					<Card
						Title={list.title}
						Img={list.image_url}
						Genres={list.genres}
						DateStart={list.airing_start}
						Score={list.score}
						key={list.mal_id}
					/>
				))}
		</section>
	);
};
