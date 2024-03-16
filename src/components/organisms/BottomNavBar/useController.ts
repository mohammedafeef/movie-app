import { useRouter } from '../../../libs/router';

export const useController = () => {
	const router = useRouter();

	const gotoFavorites = () => {
		router.favorites();
	};
	const gotoWishlist = () => {
		router.wishlist();
	};

	return {
		values: {},
		actions: {
			gotoFavorites,
			gotoWishlist,
		},
	};
};
