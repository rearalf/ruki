import React from 'react';

export const ArrowLeft = ({ Height = 20, Width = 20, Fill = '#24292e', Title = 'Prevoiuos' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={Width} height={Height} viewBox="0 0 21 21">
			<title>{Title}</title>
			<g
				fill="none"
				fillRule="evenodd"
				stroke={Fill}
				strokeLinecap="round"
				strokeLinejoin="round"
				transform="translate(3 6)">
				<polyline
					points="1.67 1.669 7.327 1.671 7.328 7.328"
					transform="scale(-1 1) rotate(45 0 -6.364)"
				/>
				<line x1="13.5" x2=".5" y1="4.5" y2="4.5" />
			</g>
		</svg>
	);
};
