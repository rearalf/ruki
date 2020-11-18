import React from 'react';
import { ArrowDown } from './Icons/ArrowDown';
import '../assets/styles/components/MoreInfo.sass';

export const MoreInfo = ({ children, title = '', id = '' }) => {
	const showInfo = id => {
		const info = document.getElementById(id);
		info.classList.toggle('show');
	};

	return (
		<section className="moreInfo">
			<div className="headerInfo" onClick={() => showInfo(id)}>
				<h3>{title}</h3>
				<ArrowDown Width={30} />
			</div>
			<hr />
			<div className="moreInfoDown" id={id}>
				{children}
			</div>
		</section>
	);
};
