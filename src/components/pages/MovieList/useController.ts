import { getMovieList } from 'store/slice/movieList/selectors';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from 'store/api';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { movieListActions } from 'store/slice/movieList';

export const useController = () => {
	const { items } = useSelector(getMovieList);
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);
	const prevResult = useGetMoviesQuery({ page: currentPage - 1 });
	const currentResult = useGetMoviesQuery({ page: currentPage });
	const nextResult = useGetMoviesQuery({ page: currentPage + 1 });
	const combined = useMemo(() => {
		return [
			...(prevResult.data?.results || []),
			...(currentResult.data?.results || []),
			...(nextResult.data?.results || []),
		];
	}, [prevResult, currentResult, nextResult, currentPage]);
	const handlePageChange = () => {
		setCurrentPage(currentPage + 1);
	};

	useEffect(() => {
		if (combined) {
			dispatch(movieListActions.loadData(combined));
		}
	}, [combined]);

	return {
		values: {
			movieList: items,
		},
		actions: {
			handlePageChange,
		},
	};
};
