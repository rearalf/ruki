export const API_URL = 'https://api.jikan.moe/v3';

export function getDate(){
	const f = new Date();
	const CurrentMonthNumber = f.getMonth() + 1;
	var season;
	if (CurrentMonthNumber === 12 || (CurrentMonthNumber >= 1 && CurrentMonthNumber <= 2)) {
		season = 'winter';
	}
	else if (CurrentMonthNumber >= 3 && CurrentMonthNumber <= 5) {
		season = 'spring';
	}
	else if (CurrentMonthNumber >= 6 && CurrentMonthNumber <= 8) {
		season = 'summer';
	}
	else if (CurrentMonthNumber >= 9 && CurrentMonthNumber <= 11) {
		season = 'fall';
	}
	if (CurrentMonthNumber === 12) {
		return {
			CurrentSeason: season,
			CurrentYear: f.getFullYear() + 1,
		};
	}
	return {
		CurrentSeason: season,
		CurrentYear: f.getFullYear(),
	};
}
