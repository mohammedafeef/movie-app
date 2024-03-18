import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configActions } from './slice/config';
import { movieListActions } from './slice/movieList';
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
			query: ({ page = 1, filter }) => ({
				url: '/discover/movie',
				method: 'GET',
				params: {
					page,
					include_video: true,
					with_genres: filter.genres,
					language: filter.language,
				},
			}),
			onQueryStarted(arg, api) {
				api.queryFulfilled.then((res) => {
					api.dispatch(movieListActions.loadData(res.data));
				});
			},
		}),
		getGenres: build.query({
			query: () => ({
				url: '/genre/movie/list',
				method: 'GET',
			}),
			onQueryStarted(arg, api) {
				api.queryFulfilled.then((res) => {
					api.dispatch(configActions.updateGenres(res.data.genres));
				});
			},
		}),
		getLanguages: build.query({
			query: () => ({
				url: '/configuration/languages',
				method: 'GET',
			}),
			onQueryStarted(arg, api) {
				api.queryFulfilled.then((res) => {
					api.dispatch(configActions.updateLanguages(res.data));
				});
			},
		}),
		getVideo: build.query({
			query: ({ id }) => ({
				url: `/movie/${id}/videos`,
				method: 'GET',
			}),
		}),
	}),
});

export const {
	useGetMoviesQuery,
	useGetGenresQuery,
	useGetLanguagesQuery,
	usePrefetch,
} = movieApi;
