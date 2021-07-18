import React from 'react';
import '@styles/components/ChangeTypeRated.sass';

export const ChangeTypeRated = ({ handleChangeOption, Option, handleChangeRated, Rated }) => (
	<div className="formCheck">
		<h4>Type and rated</h4>
		<select
			className="inputBasic"
			name="seasons"
			id="seasons"
			onChange={handleChangeOption}
			value={Option}>
			<option value="All">All</option>
			<option value="TV">TV</option>
			<option value="ONA">ONA</option>
			<option value="OVA">OVA</option>
			<option value="Movie">Movie</option>
			<option value="Special">Special</option>
		</select>
		<div className="formInputCheck">
			<input
				className="checkInput"
				type="checkbox"
				name="ratedInputRadio"
				id="ratedInputRadio"
				onChange={handleChangeRated}
				value={Rated}
			/>
			<label className="form-check-label" htmlFor="ratedInputRadio">
				R18+
			</label>
		</div>
	</div>
);
