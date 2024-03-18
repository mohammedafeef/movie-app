import DetailedMovieCard from '../../molecules/DetailedMovieCard';
import PageLayout from '../../templates/PageLayout';
import React from 'react';
import { useController } from './useController';
import InfiniteScroll from 'react-infinite-scroll-component';

const MovieList: React.FC = () => {
	const { values, actions } = useController();
	console.log(values.totalPage, values.page);
	return (
		<PageLayout className="gap-y-3">
			<InfiniteScroll
				next={actions.handlePageChange}
				dataLength={values.page * 20}
				hasMore={values.totalPage > values.page}
				loader={
					<div className="w-full text-black text-xl text-center">...</div>
				}
				className="flex flex-col gap-y-3"
			>
				{values.movieList?.map((movie) => (
					<DetailedMovieCard key={movie.id} {...movie} />
				))}
			</InfiniteScroll>
		</PageLayout>
	);
};

export default MovieList;
