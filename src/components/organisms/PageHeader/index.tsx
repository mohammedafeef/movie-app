import React from 'react';
import Button from '../../atoms/Button';
import { PageHeaderProps } from './types';
import { cn } from '../../../libs/cn';

const PageHeader: React.FC<PageHeaderProps> = (props) => {
	return (
		<header
			className={cn(
				'flex w-full h-full items-center drop-shadow-md bg-white',
				props.className
			)}
		>
			<h1 className="m-0 pl-4 text-2xl font-semibold text-black flex-1">
				Movie App
			</h1>
			<Button
				className="px-4 h-full flex items-center"
				onClick={props.onSortClick}
			>
				Sort & Filter
			</Button>
		</header>
	);
};

export default PageHeader;
