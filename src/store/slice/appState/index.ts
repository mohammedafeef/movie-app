import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppStateType, Filter } from './types';

export const appScreens = {
	list: 'list',
	favorite: 'favorite',
	wishList: 'wishList',
};

const initialState: AppStateType = {
	filter: {
		genres: [],
		language: '',
		fromDate: '',
		toDate: '',
		rating: 0,
	},
	currentScreen: appScreens.list,
};

const appStateSlice = createSlice({
	name: 'appState',
	initialState,
	reducers: {
		updateFilter: (state, action: PayloadAction<Filter>) => {
			state.filter = action.payload;
		},
		updateScreen: (state, action: PayloadAction<string>) => {
			state.currentScreen = action.payload;
		},
		resetFilter: (state) => {
			state.filter = {
				genres: [],
				language: '',
				fromDate: '',
				toDate: '',
				rating: 0,
			};
		},
	},
});

export const appStateActions = appStateSlice.actions;

export default appStateSlice.reducer;
