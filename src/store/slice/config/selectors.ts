import { RootState } from '../../types';

export const getGenres = (state: RootState) => state.config.genres;
export const getLanguages = (state: RootState) => state.config.languages;
