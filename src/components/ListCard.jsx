import React from 'react';
import { Card } from './Card';
import '@styles/components/ListCard.sass';

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
						Type={list.type}
						key={list.mal_id}
						id={list.mal_id}
					/>
				))}
		</section>
	);
};
