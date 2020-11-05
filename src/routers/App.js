import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Layout } from '../components/Layout';
import { Anime } from '../pages/Anime';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/anime/:id" component={Anime} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
