import DetailedMovieCard from '../../molecules/DetailedMovieCard';
import PageLayout from '../../templates/PageLayout';
import React from 'react';
import { useController } from './useController';

const MovieList: React.FC = () => {
	const { values } = useController();
	return (
		<PageLayout className="gap-y-3">
			{values.movieList?.map((movie) => (
				<DetailedMovieCard key={movie.id} {...movie} />
			))}
		</PageLayout>
	);
};

export default MovieList;
