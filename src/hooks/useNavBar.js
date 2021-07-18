import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getDate } from '@utils/settings';
import { getSearch } from '@services/getSearch';

export function useNavBar(){
	const { CurrentYear, CurrentSeason } = getDate();
	const [ toggleState, setTogglestate ] = useState(false);

	const toggleBody = () => {
		const body = document.querySelector('body');
		if (toggleState) {
			body.classList.add('nav_open_noscroll');
		}
		else {
			body.classList.remove('nav_open_noscroll');
		}
	};

	useEffect(
		() => {
			toggleBody();
		},
		[ toggleState ],
	);

	const handleDropDown = () => {
		const dropDown = document.getElementById('navbarDropdown');
		dropDown.classList.toggle('show');
		const svgDropDown = document.getElementById('svgDropDown').firstChild;
		svgDropDown.classList.toggle('turn');
	};

	return {
		CurrentYear,
		CurrentSeason,
		handleDropDown,
		toggleState,
		setTogglestate,
	};
}

export const useNavSearch = () => {
	const history = useHistory();
	const [ SearchAnime, setSearchAnime ] = useState([]);
	const [ Name, setName ] = useState('');
	const [ Focus, setFocus ] = useState(false);

	const handleSearchInput = ({ target }) => {
		const value = target.value;
		if (value.length >= 4) {
			getSearch({ title: value }).then(res => {
				setSearchAnime(res.results);
			});
		}
		else {
			setSearchAnime([]);
		}
		setName(value);
	};

	const handleSearch = e => {
		e.preventDefault();
		Name && history.replace(`/search/${Name}`);
		setName('');
	};

	const isButtonDisabled = !Name.length && !SearchAnime.length !== 0;

	const handleOnBlur = e => {
		if (!e.currentTarget.contains(e.relatedTarget)) {
			setFocus(!Focus);
		}
	};

	const handleOnFocus = e => {
		if (!e.currentTarget.contains(e.relatedTarget)) {
			setFocus(!Focus);
		}
	};

	return {
		isButtonDisabled,
		handleSearch,
		Focus,
		setFocus,
		Name,
		handleSearchInput,
		SearchAnime,
		setSearchAnime,
		handleOnBlur,
		handleOnFocus,
	};
};
