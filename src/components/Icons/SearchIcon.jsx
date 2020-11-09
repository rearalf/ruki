import React from 'react';

export const SearchIcon = ({ Width = 20, Height = 20, Fill = '#24292e', Title = 'Search' }) => (
	<svg height={Width} viewBox="0 0 21 21" width={Height} xmlns="http://www.w3.org/2000/svg">
		<title>{Title}</title>
		<g
			fill="none"
			fillRule="evenodd"
			stroke={Fill}
			strokeLinecap="round"
			strokeLinejoin="round">
			<circle cx="8.5" cy="8.5" r="5" />
			<path d="m17.571 17.5-5.571-5.5" />
		</g>
	</svg>
);
