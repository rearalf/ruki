import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star } from '../components/Icons/Star';
import { Rank } from '../components/Icons/Rank';
import { Users } from '../components/Icons/Users';
import { ArrowDown } from '../components/Icons/ArrowDown';
import { useGetAnime } from '../hooks/useGetAnime';
import imgLoading from '../assets/static/loading.gif';
import { NotFound } from './NotFound';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import '../assets/styles/components/Anime.sass';

const objeto = {
	normal: 'normal',
	genre: 'genre',
	producer: 'producer',
};

export const Anime = () => {
	const { id } = useParams();
	const { Anime, loading } = useGetAnime({ id });

	const showInfo = id => {
		const info = document.getElementById(id);
		info.classList.toggle('show');
	};

	const Replicdata = (items, type) => {
		if (type === objeto.normal) {
			return items.map(item => (
				<Link className="listInfo" to={`/${item.type}/${item.mal_id}`} key={item.mal_id}>
					{item.name},
				</Link>
			));
		}
		else if (type === objeto.genre) {
			return items.map(item => (
				<Link
					className="listInfo"
					to={`/${item.type}/${type}/${item.mal_id}`}
					key={item.mal_id}>
					{item.name},
				</Link>
			));
		}
		else if (type === objeto.producer) {
			return items.map(item => (
				<Link
					className="listInfo"
					to={`/${item.type}/${type}/${item.mal_id}`}
					key={item.mal_id}>
					{item.name},
				</Link>
			));
		}
	};

	return (
		<Layout>
			{loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : Anime.aired ? (
				<Fragment>
					<Header title={Anime.title} description={Anime.synopsis} />
					<section className="ShowData">
						<img src={Anime.image_url} alt={Anime.title} />
						<div className="Info">
							<div className="Header">
								<div className="score HeaderInfo">
									<h4>
										<Star />
										Score:
									</h4>
									<p># {Anime.score}</p>
								</div>
								<div className="rank HeaderInfo">
									<h4>
										<Rank />
										Rank:
									</h4>
									<p># {Anime.rank}</p>
								</div>
								<div className="popularity HeaderInfo">
									<h4>
										<Users Title={'Popularity'} />
										Popularity:
									</h4>
									<p># {Anime.popularity}</p>
								</div>
							</div>
							<article className="InfoPrimary">
								<h1>{Anime.title}</h1>
								<p>{Anime.synopsis}</p>
							</article>
						</div>
					</section>
					<section className="moreInfo">
						<div className="headerInfo" onClick={() => showInfo('Alternative')}>
							<h2>Alternative Titles</h2>
							<ArrowDown Width={30} />
						</div>
						<hr />
						<article className="moreInfoDown" id="Alternative">
							<div className="alternativeTitles">
								{Anime.title_english && (
									<p>
										English: <span>{Anime.title_english}</span>
									</p>
								)}
								<p>
									Japanese: <span>{Anime.title_japanese}</span>
								</p>
								{Anime.title_synonyms.length !== 0 && (
									<p>
										Synonyms:
										{Anime.title_synonyms.map((item, index) => (
											<span className="listInfo" key={index}>
												{item},
											</span>
										))}
									</p>
								)}
							</div>
						</article>
					</section>
					<section className="moreInfo">
						<div className="headerInfo" onClick={() => showInfo('Information')}>
							<h2>Information</h2>
							<ArrowDown Width={30} />
						</div>
						<hr />
						<article className="moreInfoDown" id="Information">
							<div className="information">
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
									Aired: <span>{Anime.aired.string}</span>
								</p>
								<p>
									Premiered: <span>{Anime.premiered}</span>
								</p>
								<p>
									Broadcast: <span>{Anime.broadcast}</span>
								</p>
								<p>
									Producers:
									{Replicdata(Anime.producers, objeto.producer)}
								</p>
								<p>
									Licensors:
									{Replicdata(Anime.licensors, objeto.producer)}
								</p>
								<p>
									Studios:
									{Replicdata(Anime.studios, objeto.producer)}
								</p>
								<p>
									Source: <span>{Anime.source}</span>
								</p>
								<p>
									Genres:
									{Replicdata(Anime.genres, objeto.genre)}
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
					{Object.entries(Anime.related).length !== 0 && (
						<section className="moreInfo">
							<div className="headerInfo" onClick={() => showInfo('Related')}>
								<h2>Related Anime</h2>
								<ArrowDown Width={30} />
							</div>
							<hr />
							<article className="moreInfoDown" id="Related">
								<div className="alternativeTitles">
									{Anime.related.Adaptation && (
										<p>
											Adaptation:
											{Replicdata(Anime.related.Adaptation, objeto.normal)}
										</p>
									)}
									{Anime.related.Prequel && (
										<p>
											Prequel:{' '}
											{Replicdata(Anime.related.Prequel, objeto.normal)}
										</p>
									)}
									{Anime.related.Sequel && (
										<p>
											Sequel:
											{Replicdata(Anime.related.Sequel, objeto.normal)}
										</p>
									)}
									{Anime.related['Alternative version'] && (
										<p>
											Alternative version:
											{Replicdata(
												Anime.related['Alternative version'],
												objeto.normal,
											)}
										</p>
									)}
								</div>
							</article>
						</section>
					)}
				</Fragment>
			) : (
				<NotFound />
			)}
		</Layout>
	);
};
