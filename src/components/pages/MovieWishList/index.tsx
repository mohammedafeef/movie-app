import BasicMovieCard from '../../atoms/BasicMovieCard';
import PageLayout from '../../templates/PageLayout';
import React from 'react';
import { useController } from './useController';

const MovieWishList: React.FC = () => {
	const { values } = useController();
	return (
		<PageLayout className="gap-y-3">
			<h2 className="text-xl font-bold text-black m-0">Wish List</h2>
			{values.movieList.map((movie) => (
				<BasicMovieCard key={movie.id} {...movie} />
			))}
		</PageLayout>
	);
};

export default MovieWishList;
