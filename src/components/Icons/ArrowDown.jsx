import React from 'react';

export const ArrowDown = ({ Height = 20, Width = 20, Fill = '#24292e', Title = 'Down' }) => {
	return (
		<svg height={Height} viewBox="0 0 21 21" width={Width} xmlns="http://www.w3.org/2000/svg">
			<title>{Title}</title>
			<g
				fill="none"
				fillRule="evenodd"
				stroke={Fill}
				strokeLinecap="round"
				strokeLinejoin="round"
				transform="matrix(0 1 -1 0 20 2)">
				<circle cx="8.5" cy="8.5" r="8" />
				<path
					d="m11.621 6.379v4.242h-4.242"
					transform="matrix(.70710678 .70710678 .70710678 -.70710678 -3.227683 7.792317)"
				/>
				<path d="m8.5 4.5v8" transform="matrix(0 1 -1 0 17 0)" />
			</g>
		</svg>
	);
};
