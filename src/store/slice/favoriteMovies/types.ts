interface Movie {
	id: number;
	title: string;
	poster_path: string;
}

export interface MoviesListStateType {
	items: Movie[];
}
