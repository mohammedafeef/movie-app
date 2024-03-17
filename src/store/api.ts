import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const movieApi = createApi({
	reducerPath: 'movieApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3',
		prepareHeaders(headers) {
			headers.set('Authorization', `Bearer ${process.env.REACT_APP_API_KEY}`);
			return headers;
		},
	}),
	endpoints: (build) => ({
		getMovies: build.query({
			query: ({ page }) => ({
				url: '/discover/movie',
				method: 'GET',
				params: {
					page,
				},
			}),
		}),
		getGenres: build.query({
			query: () => ({
				url: '/genre/movie/list',
				method: 'GET',
			}),
		}),
		getLanguages: build.query({
			query: () => ({
				url: '/configuration/languages',
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetMoviesQuery, useGetGenresQuery, useGetLanguagesQuery } =
	movieApi;
