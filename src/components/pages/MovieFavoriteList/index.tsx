import BasicMovieCard from '../../atoms/BasicMovieCard';
import PageLayout from '../../templates/PageLayout';
import React from 'react';
import { useController } from './useController';

const MovieFavoriteList: React.FC = () => {
	const { values } = useController();
	return (
		<PageLayout className="gap-y-3">
			<h2 className="text-xl font-bold text-black m-0">Favorites</h2>
			{values?.movieList?.length ? (
				values.movieList.map((movie) => (
					<BasicMovieCard key={movie.id} {...movie} />
				))
			) : (
				<div className="text-lg font-semibold text-black/60 w-full text-center">
					No Favorites
				</div>
			)}
		</PageLayout>
	);
};

export default MovieFavoriteList;
