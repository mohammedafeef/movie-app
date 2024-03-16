import DetailedMovieCard from '@molecules/DetailedMovieCard';
import PageLayout from '@templates/PageLayout';
import React from 'react';

const movieList = [
	{
		id: 1,
		title: 'The Conjuring',
		poster_path:
			'https://image.tmdb.org/t/p/w500//9GkvJF5GgKJzI1y8CPG4RNU4Jq.jpg',
	},
	{
		id: 2,
		title: 'The Conjuring',
		poster_path:
			'https://image.tmdb.org/t/p/w500//9GkvJF5GgKJzI1y8CPG4RNU4Jq.jpg',
	},
	{
		id: 3,
		title: 'The Conjuring',
		poster_path:
			'https://image.tmdb.org/t/p/w500//9GkvJF5GgKJzI1y8CPG4RNU4Jq.jpg',
	},
];

const MovieList: React.FC = () => {
	return (
		<PageLayout className="gap-y-3">
			{movieList.map((movie) => (
				<DetailedMovieCard key={movie.id} {...movie} />
			))}
		</PageLayout>
	);
};

export default MovieList;
