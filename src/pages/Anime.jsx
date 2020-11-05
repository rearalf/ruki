import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnime } from '../services/getAnime';
import { Star } from '../components/Icons/Star';
import { Rank } from '../components/Icons/Rank';
import { Users } from '../components/Icons/Users';
import '../assets/styles/components/Anime.sass';
import { ArrowDown } from '../components/Icons/ArrowDown';

const objeto = {
	request_cached: true,
	request_cache_expiry: 0,
	mal_id: 0,
	url: '',
	image_url: '',
	trailer_url: '',
	title: '',
	title_english: '',
	title_japanese: '',
	title_synonyms: [],
	type: '',
	source: '',
	episodes: 0,
	status: '',
	airing: false,
	aired: {
		from: '',
		to: '',
		prop: {
			from: {
				day: 0,
				month: 0,
				year: 0,
			},
			to: {
				day: 0,
				month: 0,
				year: 0,
			},
		},
		string: '',
	},
	duration: '',
	rating: '',
	score: 0,
	scored_by: 0,
	rank: 0,
	popularity: 0,
	members: 0,
	favorites: 0,
	synopsis: '',
	background: null,
	premiered: '',
	broadcast: '',
	related: {
		Adaptation: [],
		'Side story': [],
		Summary: [],
	},
	producers: [],
	licensors: [],
	studios: [],
	genres: [],
	opening_themes: [],
	ending_themes: [],
};

export const Anime = () => {
	const { id } = useParams();
	const [ Anime, setAnime ] = useState(objeto);

	useEffect(() => {
		getAnime({ id }).then(res => setAnime(res));
	}, []);

	const showInfo = id => {
		const info = document.getElementById(id);
		info.classList.toggle('show');
	};

	return (
		<Fragment>
			<section className="ShowData">
				<img src={Anime.image_url} alt={Anime.title} />
				<div className="Info">
					<div className="Header">
						<div className="score HeaderInfo">
							<h4>
								<Star />
								Score:
							</h4>
							<p>#{Anime.score}</p>
						</div>
						<div className="rank HeaderInfo">
							<h4>
								<Rank />
								Rank:
							</h4>
							<p>#{Anime.rank}</p>
						</div>
						<div className="popularity HeaderInfo">
							<h4>
								<Users Title={'Popularity'} />
								Popularity:
							</h4>
							<p>#{Anime.popularity}</p>
						</div>
					</div>
					<article className="InfoPrimary">
						<h1>{Anime.title}</h1>
						<p>{Anime.synopsis}</p>
					</article>
				</div>
			</section>
			<section className="moreInfo">
				<div className="headerInfo">
					<h1>More Info</h1>
					<div onClick={() => showInfo('moreInfoDown')}>
						<ArrowDown Width={30} />
					</div>
				</div>
				<article className="moreInfoDown" id="moreInfoDown">
					<div className="alternativeTitles">
						<h2>Alternative Titles</h2>
						<hr />
						<p>
							English: <span>{Anime.title_english}</span>
						</p>
						<p>
							Japanese: <span>{Anime.title_japanese}</span>
						</p>
					</div>
					<div className="information">
						<h2>Information</h2>
						<hr />
						<p>
							Type: <span>{Anime.type}</span>
						</p>
						<p>
							Episodes: <span>{Anime.episodes}</span>
						</p>
						<p>
							Status: <span>{Anime.status}</span>
						</p>
						<p>
							Aired: <span>{Anime.aired.from}</span>
						</p>
						<p>
							Premiered: <span>{Anime.premiered}</span>
						</p>
						<p>
							Broadcast: <span>{Anime.broadcast}</span>
						</p>
						<p>
							Producers:
							{Anime.producers.map((item, index) => (
								<span key={index}>{item.name}</span>
							))}
						</p>
						<p>
							Licensors:
							{Anime.licensors.map((item, index) => (
								<span key={index}>{item.name}</span>
							))}
						</p>
						<p>
							Studios:
							{Anime.studios.map((item, index) => (
								<span key={index}>{item.name}</span>
							))}
						</p>
						<p>
							Source: <span>{Anime.source}</span>
						</p>
						<p>
							Genres:
							{Anime.genres.map((item, index) => (
								<span key={index}>{item.name}</span>
							))}
						</p>
						<p>
							Duration: <span>{Anime.duration}</span>
						</p>
						<p>
							Rating: <span>{Anime.rating}</span>
						</p>
					</div>
				</article>
			</section>
		</Fragment>
	);
};
