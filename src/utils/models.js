export const objeto_anime = {
	request_cached: true,
	request_cache_expiry: 0,
	mal_id: 0,
	url: '',
	image_url: '',
	trailer_url: '',
	title: '',
	title_english: '',
	title_japanese: '',
	title_synonyms: [],
	type: '',
	source: '',
	episodes: 0,
	status: '',
	airing: false,
	aired: {
		from: '2020-10-03T00:00:00+00:00',
		to: '2020-10-03T00:00:00+00:00',
		prop: {
			from: {
				day: 0,
				month: 0,
				year: 0,
			},
			to: {
				day: 0,
				month: 0,
				year: 0,
			},
		},
		string: '',
	},
	duration: '',
	rating: '',
	score: 0,
	scored_by: 0,
	rank: 0,
	popularity: 0,
	members: 0,
	favorites: 0,
	synopsis: '',
	background: null,
	premiered: '',
	broadcast: '',
	related: {
		Adaptation: [],
		'Side story': [],
		Summary: [],
		Prequel: [],
		Sequel: [],
		'Alternative version': [],
		Character: [],
		Other: [],
		'Parent story': [],
	},
	producers: [],
	licensors: [],
	studios: [],
	genres: [],
	opening_themes: [],
	ending_themes: [],
};

export const Object_Anime = {
	anime: [],
	season_year: new Date().getFullYear(),
	season_name: '',
};

export const Object_Manga = {
	request_hash: '',
	request_cached: true,
	request_cache_expiry: 61776,
	mal_id: 0,
	url: '',
	title: '',
	title_english: '',
	title_synonyms: [],
	title_japanese: '',
	status: '',
	image_url: '',
	type: 'Manga',
	volumes: 0,
	chapters: 0,
	publishing: false,
	published: {
		from: '1994-12-05T00:00:00+00:00',
		to: '2001-12-20T00:00:00+00:00',
		prop: {
			from: {
				day: 5,
				month: 12,
				year: 1994,
			},
			to: {
				day: 20,
				month: 12,
				year: 2001,
			},
		},
		string: 'Dec  5, 1994 to Dec  20, 2001',
	},
	rank: 5,
	score: 9.08,
	scored_by: 44737,
	popularity: 41,
	members: 112274,
	favorites: 10834,
	synopsis: '',
	background: '',
	related: {
		'Side story': [],
		Adaptation: [],
		'Alternative version': [],
		'Spin-off': [],
		'Parent story': [],
	},
	genres: [],
	authors: [],
	serializations: [],
};

export const Objec_Genres = {
	mal_id: Number,
	type: String,
	name: '',
	url: String,
};

export const Genres = [
	'Action',
	'Adventure',
	'Cars',
	'Comedy',
	'Dementia',
	'Demons',
	'Mystery',
	'Drama',
	'Ecchi',
	'Fantasy',
	'Game',
	'Hentai',
	'Historical',
	'Horror',
	'Kids',
	'Magic',
	'Martial Arts',
	'Mecha',
	'Music',
	'Parody',
	'Samurai',
	'Romance',
	'School',
	'Sci-Fi',
	'Shoujo',
	'Shoujo Ai',
	'Shounen',
	'Shounen Ai',
	'Space',
	'Sports',
	'Super Power',
	'Vampire',
	'Yaoi',
	'Yuri',
	'Harem',
	'Slice of Life',
	'Supernatural',
	'Military',
	'Police',
	'Psychological',
	'Thriller',
	'Seinen',
	'Josei',
];

export const Studios = [
	{
		mal_id: 1,
		name: 'Studio Pierrot',
	},
	{
		mal_id: 2,
		name: 'Kyoto Animation',
	},
	{
		mal_id: 3,
		name: 'Gonzo',
	},
	{
		mal_id: 4,
		name: 'Bones',
	},
	{
		mal_id: 5,
		name: 'Bee Train',
	},
	{
		mal_id: 6,
		name: 'Gainax',
	},
	{
		mal_id: 7,
		name: 'J.C.Staff',
	},
	{
		mal_id: 8,
		name: 'Artland',
	},
	{
		mal_id: 10,
		name: 'Production I.G',
	},
	{
		mal_id: 10,
		name: 'Production I.G',
	},
	{
		mal_id: 11,
		name: 'Madhouse',
	},
	{
		mal_id: 13,
		name: 'Studio 4°C',
	},
	{
		mal_id: 14,
		name: 'Sunrise',
	},
	{
		mal_id: 15,
		name: 'Sony Pictures Entertainment',
	},
	{
		mal_id: 16,
		name: 'TV Tokyo',
	},
	{
		mal_id: 17,
		name: 'Aniplex',
	},
	{
		mal_id: 18,
		name: 'Toei Animation',
	},
	{
		mal_id: 21,
		name: 'Studio Ghibli',
	},
	{
		mal_id: 22,
		name: 'Nippon Animation',
	},
	{
		mal_id: 27,
		name: 'Xebec',
	},
	{
		mal_id: 28,
		name: 'OLM',
	},
	{
		mal_id: 30,
		name: 'Ajia-Do',
	},
	{
		mal_id: 36,
		name: 'Gallop',
	},
	{
		mal_id: 37,
		name: 'Studio Deen',
	},
	{
		mal_id: 38,
		name: 'Arms',
	},
	{
		mal_id: 41,
		name: 'Satelight',
	},
	{
		mal_id: 43,
		name: 'ufotable',
	},
	{
		mal_id: 44,
		name: 'Shaft',
	},
	{
		mal_id: 51,
		name: 'Diomedea',
	},
	{
		mal_id: 56,
		name: 'A-1 Pictures',
	},
	{
		mal_id: 60,
		name: 'Actas',
	},
	{
		mal_id: 68,
		name: 'Mushi Production',
	},
	{
		mal_id: 73,
		name: 'TMS Entertainment',
	},
	{
		mal_id: 91,
		name: 'feel.',
	},
	{
		mal_id: 95,
		name: 'Doga Kobo',
	},
	{
		mal_id: 101,
		name: 'Studio Hibari',
	},
	{
		mal_id: 103,
		name: 'Tatsunoko Production',
	},
	{
		mal_id: 112,
		name: "Brain's Base",
	},
	{
		mal_id: 120,
		name: 'TNK',
	},
	{
		mal_id: 121,
		name: 'Active',
	},
	{
		mal_id: 126,
		name: 'Studio Comet',
	},
	{
		mal_id: 132,
		name: 'P.A. Works',
	},
	{
		mal_id: 196,
		name: 'Production Reed',
	},
	{
		mal_id: 207,
		name: 'Magic Bus',
	},
	{
		mal_id: 211,
		name: 'Rakuonsha',
	},
	{
		mal_id: 218,
		name: 'Zexcs',
	},
	{
		mal_id: 247,
		name: 'Shin-Ei Animation',
	},
	{
		mal_id: 276,
		name: 'DLE',
	},
	{
		mal_id: 300,
		name: 'Silver Link.',
	},
	{
		mal_id: 406,
		name: 'Asahi Production',
	},
	{
		mal_id: 432,
		name: 'Kachidoki Studio',
	},
	{
		mal_id: 456,
		name: 'Lerche',
	},
	{
		mal_id: 541,
		name: 'Seven',
	},
	{
		mal_id: 839,
		name: 'LIDENFILMS',
	},
	{
		mal_id: 858,
		name: 'Wit Studio',
	},
	{
		mal_id: 569,
		name: 'MAPPA',
	},
	{
		mal_id: 911,
		name: 'Passione',
	},
	{
		mal_id: 1211,
		name: 'Tokyo MX',
	},
	{
		mal_id: 1325,
		name: 'Haoliners Animation League',
	},
];
