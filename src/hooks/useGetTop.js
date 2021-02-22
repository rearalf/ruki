import { useCallback, useEffect, useRef, useState } from 'react';
import { getTop } from '../services/getTop';
import { useNearScreen } from './useNearScreen';
import debounce from 'just-debounce-it';

export function useGetTop(){
	const [ Top, setTop ] = useState([]);
	const [ Loading, setLoading ] = useState(false);
	const [ Option, setOption ] = useState('all');

	const [ loadingNextPage, setLoadingNextPage ] = useState(false);
	const [ Page, setPage ] = useState(1);

	const handleChangeOption = e => setOption(e.target.value);

	useEffect(
		() => {
			setLoading(true);
			getTop({ subtype: Option })
				.then(({ top }) => {
					setTop(top);
					setLoading(false);
				})
				.catch(err => {
					setLoading(false);
					console.log(err);
				});
		},
		[ Option ],
	);

	useEffect(
		() => {
			if (Page === 1) return;
			setLoadingNextPage(true);
			getTop({ subtype: Option, page: Page })
				.then(({ top }) => {
					setTop(animes => animes.concat(top));
					setLoadingNextPage(false);
				})
				.catch(err => {
					setLoadingNextPage(false);
					console.log(err);
				});
		},
		[ Page ],
	);

	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({
		externalRef: Loading ? null : externalRef,
		once: false,
	});

	const debounceHandleNextPage = useCallback(
		debounce(() => setPage(prevPage => prevPage + 1), 200),
		[ setPage ],
	);

	useEffect(
		() => {
			if (isNearScreen) debounceHandleNextPage();
		},
		[ isNearScreen, debounceHandleNextPage ],
	);

	return {
		Top,
		Loading,
		Option,
		handleChangeOption,
		loadingNextPage,
		setPage,
		externalRef,
	};
}
