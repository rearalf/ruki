import React from 'react';
import { Helmet } from 'react-helmet';

export const Header = ({ title = '', description = '' }) => {
	return (
		<Helmet>
			<title> {title} || Ruki</title>
			<meta name="description" content={description} />
		</Helmet>
	);
};
