import React from 'react';
import { BadgeProps } from './types';
import { cn } from '../../../libs/cn';

const Badge: React.FC<BadgeProps> = (props) => {
	return (
		<div
			onClick={props.onSelect}
			className={cn(
				'border border-black/75 rounded-full p-2 px-4 text-[15px] font-semibold cursor-pointer',
				{
					'bg-blue-400 border-blue-400': props.selected,
				}
			)}
		>
			{props.children}
		</div>
	);
};

export default Badge;
