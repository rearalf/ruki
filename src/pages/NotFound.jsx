import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@components/Header';
import '@styles/components/NotFound.sass';

export const NotFound = () => {
	return (
		<div class="NotFound">
			<Header title="Not Found" description="Content not found" />
			<h1>
				4 <p className="Error">?</p> 4
			</h1>
			<div class="msg">
				<p>
					¿Quizás esta página se movió? ¿Fue eliminado? ¿Es esconderse en cuarentena?
					Nunca existió ¿en primer lugar?
				</p>
				<p>
					Vayamos a <Link to="/">casa</Link> e intentemos desde allí.
				</p>
			</div>
		</div>
	);
};
