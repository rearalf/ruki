import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star } from '@components/Icons/Star';
import { Rank } from '@components/Icons/Rank';
import { Users } from '@components/Icons/Users';
import { useGetManga } from '@hooks/useGetManga';
import { Layout } from '@components/Layout';
import { NotFound } from './NotFound';
import { Header } from '@components/Header';
import { MoreInfo } from '@components/MoreInfo';
import imgLoading from '@static/loading.gif';
import '@styles/components/Anime.sass';

export const Manga = () => {
	const { id } = useParams();
	const { Manga, loading } = useGetManga({ id });

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
					<MoreInfo title="Alternative Titles" id="AlternativeTitles">
						<p className="infoText">
							English: <span>{Manga.title_english}</span>
						</p>
						<p className="infoText">
							Japanese: <span>{Manga.title_japanese}</span>
						</p>
						<p className="infoText">
							Synonyms:
							{Manga.title_synonyms.map((item, index) => (
								<span className="listInfo" key={index}>
									{item},
								</span>
							))}
						</p>
					</MoreInfo>
					<MoreInfo title="Information" id="Information">
						<p className="infoText">
							Type: <span>{Manga.type}</span>
						</p>
						<p className="infoText">
							Volumes: <span>{Manga.volumes}</span>
						</p>
						<p className="infoText">
							Status: <span>{Manga.status}</span>
						</p>
						<p className="infoText">
							Chapters: <span>{Manga.chapters}</span>
						</p>
						<p className="infoText">
							Published: <span>{Manga.published.string}</span>
						</p>
						<p className="infoText">
							Genres:
							{Manga.genres.map((item, index) => (
								<span className="listInfo" key={index}>
									{item.name},
								</span>
							))}
						</p>
						<p className="infoText">
							Authors:
							{Manga.authors.map((item, index) => (
								<span className="listInfo" key={index}>
									{item.name}
								</span>
							))}
						</p>
						<p className="infoText">
							Serialization:
							{Manga.serializations.map((item, index) => (
								<span className="listInfo" key={index}>
									{item.name}
								</span>
							))}
						</p>
					</MoreInfo>
					{Manga.related && (
						<MoreInfo title="Related Manga" id="RelatedManga">
							{Manga.related.Adaptation && (
								<p className="infoText">
									Adaptation:
									{Replicdata(Manga.related.Adaptation)}
								</p>
							)}
							{Manga.related['Spin-off'] && (
								<p className="infoText">
									Spin-off':
									{Replicdata(Manga.related['Spin-off'])}
								</p>
							)}
							{Manga.related['Side story'] && (
								<p className="infoText">
									Side story:
									{Replicdata(Manga.related['Side story'])}
								</p>
							)}
							{Manga.related['Alternative version'] && (
								<p className="infoText">
									Alternative version:
									{Replicdata(Manga.related['Alternative version'])}
								</p>
							)}
							{Manga.related['Parent story'] && (
								<p className="infoText">
									Parent story:
									{Replicdata(Manga.related['Parent story'])}
								</p>
							)}
						</MoreInfo>
					)}
				</Fragment>
			) : (
				<NotFound />
			)}
		</Layout>
	);
};
