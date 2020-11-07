import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Anime } from '../pages/Anime';
import { NotFound } from '../pages/NotFound';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/anime/:id" component={Anime} />
				<Route path="*" component={NotFound} status={404} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
