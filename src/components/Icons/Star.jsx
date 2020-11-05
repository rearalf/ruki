import React from 'react';

export const Star = ({ Width = 20, Height = 20, Fill = '#24292e' }) => (
	<svg height={Height} width={Width} viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
		<title>Score</title>
		<path
			d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z"
			fill="none"
			stroke={Fill}
			strokeLinecap="round"
			strokeLinejoin="round"
			transform="translate(3 3)"
		/>
	</svg>
);
