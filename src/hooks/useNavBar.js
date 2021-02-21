import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getDate } from '../utils/settings';
import { getSearch } from '../services/getSearch';

export function useNavBar(){
	const { CurrentYear, CurrentSeason } = getDate();
	const history = useHistory();
	const [ SearchAnime, setSearchAnime ] = useState([]);
	const [ Name, setName ] = useState('');
	const [ Focus, setFocus ] = useState(false);

	const Toggle = () => {
		const navbarCollapse = document.getElementById('navbar_collapse');
		navbarCollapse.classList.toggle('show');
		const navToggle = document.querySelectorAll('.btn_nav_toggle');
		navToggle.forEach(btn => {
			btn.classList.toggle('none_show');
		});
	};

	const handleDropDown = () => {
		const dropDown = document.getElementById('navbarDropdown');
		dropDown.classList.toggle('show');
		const svgDropDown = document.getElementById('svgDropDown').firstChild;
		svgDropDown.classList.toggle('turn');
	};

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
		handleSearchInput,
		Focus,
		setFocus,
		SearchAnime,
		Name,
		CurrentYear,
		CurrentSeason,
		Toggle,
		handleDropDown,
		setSearchAnime,
		handleOnBlur,
		handleOnFocus,
	};
}
