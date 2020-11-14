import React from 'react';
import { ArrowLeft } from './Icons/ArrowLeft';
import { ArrowRight } from './Icons/ArrowRight';
import '../assets/styles/components/Pagination.sass';

export const Pagination = ({ TotalAnime, Page, setPage }) => {
	const scroll = () => {
		const elemento = document.getElementById('root');
		elemento.scrollIntoView('auto', 'start');
	};

	const handleNext = () => {
		TotalAnime - 1 > Page && setPage(Page + 1);
		scroll();
	};

	const handlePrevious = () => {
		0 < Page && setPage(Page - 1);
		scroll();
	};

	return (
		<div className="PaginationButtons">
			<button className="PaginationButton" onClick={handlePrevious}>
				<ArrowLeft /> Anterior
			</button>
			<button className="PaginationButton" onClick={handleNext}>
				Siguiente <ArrowRight />
			</button>
		</div>
	);
};
