import { RootState } from '../../types';

export const getFilter = (state: RootState) => state.appState.filter;
export const getCurrentScreen = (state: RootState) =>
	state.appState.currentScreen;
