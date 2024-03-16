import { useNavigate } from 'react-router-dom';

const ROUTES = {
	LIST: '/',
	FAVORITES: '/favorites',
	WISHLIST: '/wishlist',
};

export const useRouter = () => {
	const navigate = useNavigate();
	const navigateToRoute = (path: string) => () => navigate(path);

	return {
		router: navigate,
		list: navigateToRoute(ROUTES.LIST),
		favorites: navigateToRoute(ROUTES.FAVORITES),
		wishlist: navigateToRoute(ROUTES.WISHLIST),
	};
};
