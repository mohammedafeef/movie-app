import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import MovieList from './components/pages/MovieList';
import MovieFavoriteList from './components/pages/MovieFavoriteList';
import MovieWishList from './components/pages/MovieWishList';

function App() {
	return (
		<Routes>
			<Route path="/" element={<MovieList />} />
			<Route path="/favorites" element={<MovieFavoriteList />} />
			<Route path="/wishlist" element={<MovieWishList />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
}

export default App;
