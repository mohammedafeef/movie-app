import DetailedMovieCard from '../../molecules/DetailedMovieCard';
import PageLayout from '../../templates/PageLayout';
import React from 'react';

const movieList = [
	{
		id: 1,
		title: 'The Conjuring',
		poster_path:
			'https://resizing.flixster.com/Nx5haL3dpkOg08QLYWQZ-3_z6BQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk2YWNlZDQxLWIyMDMtNDEzNS1iMjVjLTkzNmQxOTQzYTQ4ZC53ZWJw',
	},
	{
		id: 2,
		title: 'The Conjuring',
		poster_path:
			'https://resizing.flixster.com/Nx5haL3dpkOg08QLYWQZ-3_z6BQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk2YWNlZDQxLWIyMDMtNDEzNS1iMjVjLTkzNmQxOTQzYTQ4ZC53ZWJw',
	},
	{
		id: 3,
		title: 'The Conjuring',
		poster_path:
			'https://resizing.flixster.com/Nx5haL3dpkOg08QLYWQZ-3_z6BQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk2YWNlZDQxLWIyMDMtNDEzNS1iMjVjLTkzNmQxOTQzYTQ4ZC53ZWJw',
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
