import React from 'react';
import { BasicMovieCardProps } from './types';
import { getImageFullPath } from 'utils';

const BasicMovieCard: React.FC<BasicMovieCardProps> = (props) => {
	return (
		<div className="w-full min-h-[300px] max-h-[300px] relative overflow-hidden">
			<img
				src={getImageFullPath(props.poster_path)}
				className="w-full h-full object-fill"
			/>
			<div className="absolute left-0 right-0 bottom-0 py-4 px-3 bg-black/50 text-white text-lg font-bold">
				{props.title}
			</div>
		</div>
	);
};

export default BasicMovieCard;
