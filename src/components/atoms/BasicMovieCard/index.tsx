import React from 'react';
import { BasicMovieCardProps } from './types';

const BasicMovieCard: React.FC<BasicMovieCardProps> = (props) => {
	return (
		<div className="w-full h-[300px] relative">
			<img src={props.poster_path} className="w-full h-full object-fill" />
			<div className="absolute left-0 right-0 bottom-0 py-4 px-3 bg-black/50 text-white text-lg font-bold">
				{props.title}
			</div>
		</div>
	);
};

export default BasicMovieCard;
