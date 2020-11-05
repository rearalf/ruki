import React from 'react';

export const ArrowRight = ({ Height = 20, Width = 20, Fill = '#24292e', Title = 'Next' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={Width} height={Height} viewBox="0 0 21 21">
			<title>{Title}</title>
			<g
				fill="none"
				fillRule="evenodd"
				stroke={Fill}
				strokeLinecap="round"
				strokeLinejoin="round"
				transform="translate(4 6)">
				<polyline
					points="12.329 7.328 12.328 1.67 6.671 1.669"
					transform="scale(1 -1) rotate(45 20.36 0)"
				/>
				<line x1="13.5" x2=".5" y1="4.5" y2="4.5" />
			</g>
		</svg>
	);
};
