import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Star } from '../components/Icons/Star';
import { Rank } from '../components/Icons/Rank';
import { Users } from '../components/Icons/Users';
import { ArrowDown } from '../components/Icons/ArrowDown';
import { useGetAnime } from '../hooks/usegetAnime';
import imgLoading from '../assets/static/loading.gif';
import '../assets/styles/components/Anime.sass';

export const Anime = () => {
	const { id } = useParams();
	const { Anime, loading } = useGetAnime({ id });

	const showInfo = id => {
		const info = document.getElementById(id);
		info.classList.toggle('show');
	};

	return (
		<Fragment>
			{loading ? (
				<div className="ImgLoading">
					<img src={imgLoading} alt="loading" />
				</div>
			) : (
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
									{Anime.producers.map((item, index) => (
										<span className="listInfo" key={index}>
											{item.name}
										</span>
									))}
								</p>
								<p>
									Licensors:
									{Anime.licensors.map((item, index) => (
										<span className="listInfo" key={index}>
											{item.name}
										</span>
									))}
								</p>
								<p>
									Studios:
									{Anime.studios.map((item, index) => (
										<span className="listInfo" key={index}>
											{item.name}
										</span>
									))}
								</p>
								<p>
									Source: <span>{Anime.source}</span>
								</p>
								<p>
									Genres:
									{Anime.genres.map((item, index) => (
										<span className="listInfo" key={index}>
											{item.name}
										</span>
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
			)}
		</Fragment>
	);
};
