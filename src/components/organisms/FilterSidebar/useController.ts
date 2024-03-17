import { useGetGenresQuery, useGetLanguagesQuery } from 'store/api';
import { getGenres, getLanguages } from 'store/slice/config/selectors';
import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { appStateActions } from 'store/slice/appState';
import { getFilter } from 'store/slice/appState/selectors';
import { FilterSidebarProps } from './types';

export const useController = (props: FilterSidebarProps) => {
	useGetGenresQuery({});
	useGetLanguagesQuery({});
	const dispatch = useDispatch();
	const filters = useSelector(getFilter);
	const genres = useSelector(getGenres);
	const languages = useSelector(getLanguages);
	const [selectedGenres, setSelectedGenres] = useState<number[]>(
		filters.genres || []
	);
	const [language, setLanguage] = useState(filters.language || '');
	const [rating, setRating] = useState(filters.rating || 0);
	const [fromDate, setFromDate] = useState(filters.fromDate || '');
	const [toDate, setToDate] = useState(filters.toDate || '');
	const languageOptions = useMemo(() => {
		if (!languages) {
			return [];
		}
		return languages.map((language) => {
			return {
				label: language.english_name,
				value: language.iso_639_1,
			};
		});
	}, [languages]);

	const handleGenreSelection = (id: number) => () => {
		const genreIndex = selectedGenres.indexOf(id);
		if (genreIndex === -1) {
			setSelectedGenres([...selectedGenres, id]);
		} else {
			setSelectedGenres(selectedGenres.filter((genre) => genre !== id));
		}
	};
	const isGenreSelected = (id: number) => {
		return selectedGenres.includes(id);
	};
	const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFromDate(e.target.value);
	};
	const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setToDate(e.target.value);
	};
	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLanguage(e.target.value);
	};
	const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRating(Number(e.target.value));
	};
	const handleResetFilter = () => {
		setSelectedGenres([]);
		setLanguage('');
		setRating(0);
		setFromDate('');
		setToDate('');
		dispatch(appStateActions.resetFilter());
	};
	const handleSearch = () => {
		dispatch(
			appStateActions.updateFilter({
				genres: selectedGenres,
				language,
				rating,
				fromDate,
				toDate,
			})
		);
		props.onClose();
	};

	return {
		values: {
			genres,
			languages,
			languageOptions,
			fromDate,
			toDate,
			language,
			rating,
		},
		actions: {
			handleGenreSelection,
			handleFromDateChange,
			handleToDateChange,
			handleLanguageChange,
			handleRatingChange,
			handleResetFilter,
			handleSearch,
			isGenreSelected,
		},
	};
};
