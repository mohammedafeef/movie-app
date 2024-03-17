import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import MovieList from './components/pages/MovieList';
import MovieFavoriteList from './components/pages/MovieFavoriteList';
import MovieWishList from './components/pages/MovieWishList';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			{/* <PersistGate loading={null} persistor={persistor}> */}
			<Routes>
				<Route path="/" element={<MovieList />} />
				<Route path="/favorites" element={<MovieFavoriteList />} />
				<Route path="/wishlist" element={<MovieWishList />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
			{/* </PersistGate> */}
		</Provider>
	);
}

export default App;
