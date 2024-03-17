import React from 'react';
import { DetailedMovieCardProps } from './types';
import BasicMovieCard from '../../atoms/BasicMovieCard';
import { FaHeart } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa6';
import { CiBookmark } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { FaBookmark } from 'react-icons/fa';
import { useController } from './useController';

const DetailedMovieCard: React.FC<DetailedMovieCardProps> = (props) => {
	const { values, actions } = useController(props);
	return (
		<div className="flex flex-col">
			<BasicMovieCard {...props} />
			<div className="flex p-2 bg-white">
				<div className="flex gap-x-1 flex-1 items-center ">
					{Array.from({ length: 5 }, (_, i) => i + 1).map((ele) => (
						<FaRegStar
							key={ele}
							className="text-2xl text-black cursor-pointer"
						/>
					))}
				</div>
				<div
					onClick={actions.handleFavoriteClick}
					className="flex flex-col justify-center items-center mr-3 gap-y-1"
				>
					{values.isFavorite ? (
						<FaHeart className="text-3xl text-red-500 cursor-pointer" />
					) : (
						<CiHeart className="text-3xl text-black cursor-pointer" />
					)}
					<span className="text-sm font-semibold text-black">Favorite</span>
				</div>
				<div
					onClick={actions.handleWishListClick}
					className="flex flex-col justify-center items-center gap-y-1"
				>
					{values.isWishListed ? (
						<FaBookmark className="text-3xl text-blue-500 cursor-pointer" />
					) : (
						<CiBookmark className="text-3xl text-black cursor-pointer" />
					)}
					<span className="text-sm font-semibold text-black">Wishlist</span>
				</div>
			</div>
		</div>
	);
};

export default DetailedMovieCard;
