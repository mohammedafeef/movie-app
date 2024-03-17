import { getWishListMovies } from 'store/slice/wishListMovies/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { appScreens, appStateActions } from 'store/slice/appState';

export const useController = () => {
	const dispatch = useDispatch();
	const { items } = useSelector(getWishListMovies);

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
