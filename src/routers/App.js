import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Anime } from '../pages/Anime';
import { NotFound } from '../pages/NotFound';
import { Manga } from '../pages/Manga';
import { Animes } from '../pages/Animes';
import { AnimeGenre } from '../pages/AnimeGenre';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/anime/:id" component={Anime} />
				<Route exact path="/manga/:id" component={Manga} />
				<Route exact path="/anime" component={Animes} />
				<Route exact path="/anime/genre/:id" component={AnimeGenre} />
				<Route path="*" component={NotFound} status={404} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
