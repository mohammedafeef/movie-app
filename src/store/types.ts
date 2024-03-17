import { store } from './';

export interface Movie {
	id: number;
	title: string;
	poster_path: string;
}

export type RootState = ReturnType<typeof store.getState>;
