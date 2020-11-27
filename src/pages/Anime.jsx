import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star } from '../components/Icons/Star';
import { Rank } from '../components/Icons/Rank';
import { Users } from '../components/Icons/Users';
import { useGetAnime } from '../hooks/useGetAnime';
import imgLoading from '../assets/static/loading.gif';
import { NotFound } from './NotFound';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { MoreInfo } from '../components/MoreInfo';
import ContextUser from '../context/user';
import { AllWatchedAnimes } from '../services/addWatchedAnime';
import { WatchedAnime } from '../services/WatchedAnime';
import { DeleteWatchedAnime } from '../services/deleteWatchedAnime';
import '../assets/styles/components/Anime.sass';

const objeto = {
	normal: 'normal',
	genre: 'genre',
	producer: 'producer',
};

export const Anime = () => {
	const User = useContext(ContextUser);
	const { id } = useParams();
	const [ Watched, setWatched ] = useState(false);
	const { Anime, loading, Characters } = useGetAnime({ id });

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

	const VoiceActors = actors => {
		const voice = actors.find(element => element.language === 'Japanese');
		if (voice !== undefined) {
			const { name, language, image_url } = voice;
			return (
				<Fragment>
					<div className="infoCharacterAnime">
						<p>{name}</p>
						<span>{language}</span>
					</div>
					<img src={image_url} alt={name} />
				</Fragment>
			);
		}
		return null;
	};

	const handleAddWatched = () => {
		AllWatchedAnimes({
			id_user: User.uid,
			mal_id: Anime.mal_id,
			image_url: Anime.image_url,
			title: Anime.title,
			type: Anime.type,
			score: Anime.score,
			genres: Anime.genres,
		}).then(() => {
			setWatched(!Watched);
		});
	};

	const handleDeleteWatched = () => {
		DeleteWatchedAnime({
			id_user: User.uid,
			mal_id: Anime.mal_id,
		}).then(() => {
			setWatched(!Watched);
		});
	};

	useEffect(
		() => {
			User &&
				WatchedAnime({
					id_user: User.uid,
					mal_id: Anime.mal_id,
				}).then(({ found }) => {
					console.log(found);
					setWatched(found);
				});
		},
		[ id, User ],
	);

	return (
		<Layout>
			{loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : Anime.aired ? (
				<Fragment>
					<Header title={Anime.title} description={Anime.synopsis} />
					{User && (
						<Fragment>
							{Watched ? (
								<button onClick={handleDeleteWatched}>Deleted Watched</button>
							) : (
								<button onClick={handleAddWatched}>Add Watched</button>
							)}
						</Fragment>
					)}
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
					<MoreInfo id="Alternative" title="Alternative Titles">
						{Anime.title_english && (
							<p className="infoText">
								English: <span>{Anime.title_english}</span>
							</p>
						)}
						<p className="infoText">
							Japanese: <span>{Anime.title_japanese}</span>
						</p>
						{Anime.title_synonyms.length !== 0 && (
							<p className="infoText">
								Synonyms:
								{Anime.title_synonyms.map((item, index) => (
									<span className="listInfo" key={index}>
										{item},
									</span>
								))}
							</p>
						)}
					</MoreInfo>
					<MoreInfo id="Information" title="Information">
						<p className="infoText">
							Type: <span>{Anime.type}</span>
						</p>
						<p className="infoText">
							Episodes: <span>{Anime.episodes}</span>
						</p>
						<p className="infoText">
							Status: <span>{Anime.status}</span>
						</p>
						<p className="infoText">
							Aired: <span>{Anime.aired.string}</span>
						</p>
						<p className="infoText">
							Premiered: <span>{Anime.premiered}</span>
						</p>
						<p className="infoText">
							Broadcast: <span>{Anime.broadcast}</span>
						</p>
						<p className="infoText">
							Producers:
							{Replicdata(Anime.producers, objeto.producer)}
						</p>
						<p className="infoText">
							Licensors:
							{Replicdata(Anime.licensors, objeto.producer)}
						</p>
						<p className="infoText">
							Studios:
							{Replicdata(Anime.studios, objeto.producer)}
						</p>
						<p className="infoText">
							Source: <span>{Anime.source}</span>
						</p>
						<p className="infoText">
							Genres:
							{Replicdata(Anime.genres, objeto.genre)}
						</p>
						<p className="infoText">
							Duration: <span>{Anime.duration}</span>
						</p>
						<p className="infoText">
							Rating: <span>{Anime.rating}</span>
						</p>
					</MoreInfo>
					{Object.entries(Anime.related).length !== 0 && (
						<MoreInfo title="Related Anime" id="Related">
							{Anime.related.Adaptation && (
								<p className="infoText">
									Adaptation:
									{Replicdata(Anime.related.Adaptation, objeto.normal)}
								</p>
							)}
							{Anime.related.Prequel && (
								<p className="infoText">
									Prequel: {Replicdata(Anime.related.Prequel, objeto.normal)}
								</p>
							)}
							{Anime.related.Sequel && (
								<p className="infoText">
									Sequel:
									{Replicdata(Anime.related.Sequel, objeto.normal)}
								</p>
							)}
							{Anime.related['Alternative version'] && (
								<p className="infoText">
									Alternative version:
									{Replicdata(
										Anime.related['Alternative version'],
										objeto.normal,
									)}
								</p>
							)}
							{Anime.related.Character && (
								<p className="infoText">
									Character:
									{Replicdata(Anime.related.Character, objeto.normal)}
								</p>
							)}
							{Anime.related.Other && (
								<p className="infoText">
									Other:
									{Replicdata(Anime.related.Other, objeto.normal)}
								</p>
							)}
							{Anime.related['Spin-off'] && (
								<p className="infoText">
									Spin-off:
									{Replicdata(Anime.related['Spin-off'], objeto.normal)}
								</p>
							)}
							{Anime.related['Parent story'] && (
								<p className="infoText">
									Parent story:
									{Replicdata(Anime.related['Parent story'], objeto.normal)}
								</p>
							)}
							{Anime.related.Summary && (
								<p className="infoText">
									Summary:
									{Replicdata(Anime.related.Summary, objeto.normal)}
								</p>
							)}
							{Anime.related['Side story'] && (
								<p className="infoText">
									Side story:
									{Replicdata(Anime.related['Side story'], objeto.normal)}
								</p>
							)}
							{Anime.related['Full story'] && (
								<p className="infoText">
									Full story:
									{Replicdata(Anime.related['Full story'], objeto.normal)}
								</p>
							)}
						</MoreInfo>
					)}
					{Characters.length !== 0 && (
						<MoreInfo id="characters" title="Characters">
							<div className="characters">
								{Characters.map(
									({ mal_id, image_url, name, role, voice_actors }) => (
										<article key={mal_id} className="character">
											<div className="characterAnime characterInfo">
												<img src={image_url} alt={name} />
												<div className="infoCharacterAnime">
													<p>{name}</p>
													<span>{role}</span>
												</div>
											</div>
											<div className="voiceActors characterInfo">
												{voice_actors.length !== 0 &&
													VoiceActors(voice_actors)}
											</div>
										</article>
									),
								)}
							</div>
						</MoreInfo>
					)}
					{Anime.ending_themes !== 0 &&
					Anime.opening_themes.length !== 0 && (
						<MoreInfo id="Themes" title="Themes">
							<div className="themes">
								{Anime.opening_themes.length !== 0 && (
									<div className="theme">
										<h4>Opening themes:</h4>
										{Anime.opening_themes.map(item => (
											<p className="infoText">{item}</p>
										))}
									</div>
								)}
								{Anime.ending_themes.length !== 0 && (
									<div className="theme">
										<h4>Opening themes:</h4>
										{Anime.ending_themes.map(item => (
											<p className="infoText">{item}</p>
										))}
									</div>
								)}
							</div>
						</MoreInfo>
					)}
				</Fragment>
			) : (
				<NotFound />
			)}
		</Layout>
	);
};
