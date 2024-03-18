import { Movie } from 'store/types';

export interface MovieListResponse {
	page: number;
	results: Movie[];
	total_results: number;
	total_pages: number;
}

export interface MoviesListStateType {
	filtering: boolean;
	items: MovieListResponse;
	filteredItems: MovieListResponse;
}
