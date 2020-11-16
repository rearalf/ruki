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
	const { Anime, loading, Characters } = useGetAnime({ id });

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
						<div className="moreInfoDown" id="Alternative">
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
						</div>
					</section>
					<section className="moreInfo">
						<div className="headerInfo" onClick={() => showInfo('Information')}>
							<h2>Information</h2>
							<ArrowDown Width={30} />
						</div>
						<hr />
						<div className="moreInfoDown" id="Information">
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
						</div>
					</section>
					{Object.entries(Anime.related).length !== 0 && (
						<section className="moreInfo">
							<div className="headerInfo" onClick={() => showInfo('Related')}>
								<h2>Related Anime</h2>
								<ArrowDown Width={30} />
							</div>
							<hr />
							<div className="moreInfoDown" id="Related">
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
							</div>
						</section>
					)}
					{Characters.length !== 0 && (
						<section className="moreInfo">
							<div className="headerInfo" onClick={() => showInfo('characters')}>
								<h2>Characters</h2>
								<ArrowDown Width={30} />
							</div>
							<hr />
							<div className="moreInfoDown" id="characters">
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
							</div>
						</section>
					)}
					{Anime.ending_themes !== 0 &&
					Anime.opening_themes.length !== 0 && (
						<section className="moreInfo">
							<div className="headerInfo" onClick={() => showInfo('Themes')}>
								<h2>Themes</h2>
								<ArrowDown Width={30} />
							</div>
							<hr />
							<div className="moreInfoDown" id="Themes">
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
							</div>
						</section>
					)}
				</Fragment>
			) : (
				<NotFound />
			)}
		</Layout>
	);
};
