import React from 'react';
import { ArrowDown } from './Icons/ArrowDown';
import '@styles/components/MoreInfo.sass';

export const MoreInfo = ({ children, title = '', id = '' }) => {
	const showInfo = id => {
		const info = document.getElementById(id);
		info.classList.toggle('show');
		const moreInfo = document.querySelector(`.${id}`).firstChild.lastChild.lastChild;
		moreInfo.classList.toggle('turn');
	};

	return (
		<section className={`moreInfo ${id}`}>
			<div className="headerInfo" onClick={() => showInfo(id)}>
				<h3>{title}</h3>
				<i>
					<ArrowDown Width={30} />
				</i>
			</div>
			<hr />
			<div className="moreInfoDown" id={id}>
				{children}
			</div>
		</section>
	);
};
