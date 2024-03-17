import { appScreens, appStateActions } from 'store/slice/appState';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getFavoriteMovies } from 'store/slice/favoriteMovies/selectors';
import { useDispatch } from 'react-redux';

export const useController = () => {
	const dispatch = useDispatch();
	const { items } = useSelector(getFavoriteMovies);

	useEffect(() => {
		dispatch(appStateActions.updateScreen(appScreens.list));
		dispatch(appStateActions.resetFilter());
	}, []);
	return {
		values: {
			movieList: items,
		},
	};
};
