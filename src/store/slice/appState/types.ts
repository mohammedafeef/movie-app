export interface Genre {
	id: number;
	name: string;
}
export interface Filter {
	genres?: number[];
	language?: string;
	fromDate?: string;
	toDate?: string;
	rating?: number;
}
export interface Page {
	currentPage: number;
	totalPages: number;
}

export interface AppStateType {
	filter: Filter;
	currentScreen: string;
}
