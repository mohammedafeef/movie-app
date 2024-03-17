import { Movie } from 'store/types';

export interface MoviesListStateType {
	filtering: boolean;
	items: Movie[];
	filteredItems: Movie[];
}
