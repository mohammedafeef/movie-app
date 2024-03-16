import React from 'react';
import { SelectProps } from './types';
import { cn } from '../../../libs/cn';

const Select: React.FC<SelectProps> = ({ options, ...props }) => {
	return (
		<select
			{...props}
			className={cn('w-full p-2 text-base bg-gray-400 text-black rounded')}
		>
			{options.map((option) => (
				<option
					key={option.value}
					value={option.value}
					className={cn('p-2 bg-gray-400')}
				>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default Select;
