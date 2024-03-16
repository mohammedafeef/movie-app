import { useRouter } from '../../../libs/router';

export const useController = () => {
	const router = useRouter();

	const gotoMovieList = () => {
		router.list();
	};

	return {
		values: {},
		actions: {
			gotoMovieList,
		},
	};
};
