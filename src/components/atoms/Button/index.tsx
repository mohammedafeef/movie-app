import React from 'react';
import { ButtonProps } from './types';
import { cn } from '../../../libs/cn';

const Button: React.FC<ButtonProps> = ({ className, variant, ...props }) => {
	return (
		<button
			className={cn(
				'p-2',
				{
					'bg-blue-500 text-xl text-white font-semibold': variant === 'default',
					'rounded-full bg-gray-300 text-base text-black/90 px-4':
						variant === 'rounded',
				},
				className
			)}
			{...props}
		/>
	);
};
Button.defaultProps = {
	variant: 'default',
};

export default Button;
