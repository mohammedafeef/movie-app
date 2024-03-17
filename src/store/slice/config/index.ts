import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ConfigStateType, Genre, Language } from './types';

const initialState: ConfigStateType = {
	genres: [],
	languages: [],
};

const configSlice = createSlice({
	name: 'config',
	initialState,
	reducers: {
		updateGenres: (state, action: PayloadAction<Array<Genre>>) => {
			state.genres = action.payload;
		},
		updateLanguages: (state, action: PayloadAction<Array<Language>>) => {
			state.languages = action.payload;
		},
	},
});

export const configActions = configSlice.actions;

export default configSlice.reducer;
