import { getMovieList } from 'store/slice/movieList/selectors';
import { useSelector } from 'react-redux';
import { movieApi, useGetMoviesQuery, usePrefetch } from 'store/api';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { appScreens, appStateActions } from 'store/slice/appState';
import { getFilter } from 'store/slice/appState/selectors';
import { UnknownAction } from '@reduxjs/toolkit';

export const useController = () => {
	const { items } = useSelector(getMovieList);
	const dispatch = useDispatch();
	const filters = useSelector(getFilter);
	usePrefetch('getMovies');
	useGetMoviesQuery({ page: 1, filter: filters });
	const handlePageChange = () => {
		dispatch(
			movieApi.endpoints.getMovies.initiate({
				page: items.page + 1,
				filter: filters,
			}) as unknown as UnknownAction
		);
	};

	useEffect(() => {
		dispatch(appStateActions.updateScreen(appScreens.list));
		dispatch(appStateActions.resetFilter());
	}, []);

	return {
		values: {
			movieList: items.results,
			totalPage: items.total_pages,
			totalResult: items.total_results,
			page: items.page,
		},
		actions: {
			handlePageChange,
		},
	};
};
