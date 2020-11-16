import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star } from '../components/Icons/Star';
import { Rank } from '../components/Icons/Rank';
import { Users } from '../components/Icons/Users';
import { ArrowDown } from '../components/Icons/ArrowDown';
import { useGetManga } from '../hooks/useGetManga';
import imgLoading from '../assets/static/loading.gif';
import { Layout } from '../components/Layout';
import { NotFound } from './NotFound';
import { Header } from '../components/Header';
import '../assets/styles/components/Anime.sass';

export const Manga = () => {
	const { id } = useParams();
	const { Manga, loading } = useGetManga({ id });

	const showInfo = id => {
		const info = document.getElementById(id);
		info.classList.toggle('show');
	};

	const Replicdata = items =>
		items.map(item => (
			<Link to={`/${item.type}/${item.mal_id}`} className="listInfo" key={item.mal_id}>
				{item.name},
			</Link>
		));

	return (
		<Layout>
			<Header title={Manga.title} description={Manga.synopsis} />
			{loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : Manga.published ? (
				<Fragment>
					<section className="ShowData">
						<img src={Manga.image_url} alt={Manga.title} />
						<div className="Info">
							<div className="Header">
								<div className="score HeaderInfo">
									<h4>
										<Star />
										Score:
									</h4>
									<p># {Manga.score}</p>
								</div>
								<div className="rank HeaderInfo">
									<h4>
										<Rank />
										Rank:
									</h4>
									<p># {Manga.rank}</p>
								</div>
								<div className="popularity HeaderInfo">
									<h4>
										<Users Title={'Popularity'} />
										Popularity:
									</h4>
									<p># {Manga.popularity}</p>
								</div>
							</div>
							<article className="InfoPrimary">
								<h1>{Manga.title}</h1>
								<p>{Manga.synopsis}</p>
							</article>
						</div>
					</section>
					<section className="moreInfo">
						<div className="headerInfo" onClick={() => showInfo('AlternativeTitles')}>
							<h2>Alternative Titles</h2>
							<ArrowDown Width={30} />
						</div>
						<hr />
						<article className="moreInfoDown" id="AlternativeTitles">
							<div className="alternativeTitles">
								<p>
									English: <span>{Manga.title_english}</span>
								</p>
								<p>
									Japanese: <span>{Manga.title_japanese}</span>
								</p>
								<p>
									Synonyms:
									{Manga.title_synonyms.map((item, index) => (
										<span className="listInfo" key={index}>
											{item},
										</span>
									))}
								</p>
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
									Type: <span>{Manga.type}</span>
								</p>
								<p>
									Volumes: <span>{Manga.volumes}</span>
								</p>
								<p>
									Status: <span>{Manga.status}</span>
								</p>
								<p>
									Chapters: <span>{Manga.chapters}</span>
								</p>
								<p>
									Published: <span>{Manga.published.string}</span>
								</p>
								<p>
									Genres:
									{Manga.genres.map((item, index) => (
										<span className="listInfo" key={index}>
											{item.name}
										</span>
									))}
								</p>
								<p>
									Authors:{' '}
									{Manga.authors.map((item, index) => (
										<span className="listInfo" key={index}>
											{item.name}
										</span>
									))}
								</p>
								<p>
									Serialization:
									{Manga.serializations.map((item, index) => (
										<span className="listInfo" key={index}>
											{item.name}
										</span>
									))}
								</p>
							</div>
						</article>
					</section>
					{Manga.related && (
						<section className="moreInfo">
							<div className="headerInfo" onClick={() => showInfo('RelatedManga')}>
								<h2>Related Manga</h2>
								<ArrowDown Width={30} />
							</div>
							<hr />
							<article className="moreInfoDown" id="RelatedManga">
								<div className="alternativeTitles">
									{Manga.related.Adaptation && (
										<p>
											Adaptation:
											{Replicdata(Manga.related.Adaptation)}
										</p>
									)}
									{Manga.related['Spin-off'] && (
										<p>
											Spin-off':
											{Replicdata(Manga.related['Spin-off'])}
										</p>
									)}
									{Manga.related['Side story'] && (
										<p>
											Side story:
											{Replicdata(Manga.related['Side story'])}
										</p>
									)}
									{Manga.related['Alternative version'] && (
										<p>
											Alternative version:
											{Replicdata(Manga.related['Alternative version'])}
										</p>
									)}
									{Manga.related['Parent story'] && (
										<p>
											Parent story:
											{Replicdata(Manga.related['Parent story'])}
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
