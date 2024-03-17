import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MovieRatingStateType, Rating } from './types';

const initialState: MovieRatingStateType = {
	items: [],
};

const ratingSlice = createSlice({
	name: 'rating',
	initialState,
	reducers: {
		updateRating: (state, action: PayloadAction<Rating>) => {
			const movie = state.items.findIndex(
				(movie) => movie.id === action.payload.id
			);
			if (movie === -1) {
				state.items = [...state.items, action.payload];
			} else {
				state.items[movie].rating = action.payload.rating;
			}
		},
	},
});

export const ratingActions = ratingSlice.actions;

export default ratingSlice.reducer;
