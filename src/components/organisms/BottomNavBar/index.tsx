import React from 'react';
import Button from '../../atoms/Button';
import { ButtonProps } from '../../atoms/Button/types';
import { BottomNavbarProps } from './types';
import { cn } from '../../../libs/cn';
import { useController } from './useController';

const BottomNavBarButton: React.FC<ButtonProps> = (props) => {
	return (
		<Button
			className="flex-1 text-white text-2xl font-semibold flex items-center justify-center h-full"
			{...props}
		/>
	);
};

const BottomNavbar: React.FC<BottomNavbarProps> = (props) => {
	const { actions } = useController();
	return (
		<div className={cn('flex w-full h-full', props.className)}>
			<BottomNavBarButton onClick={actions.gotoFavorites}>
				Favorite
			</BottomNavBarButton>
			<div className="h-full w-1 bg-white" />
			<BottomNavBarButton onClick={actions.gotoWishlist}>
				WishList
			</BottomNavBarButton>
		</div>
	);
};

export default BottomNavbar;
