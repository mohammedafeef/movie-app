import React from 'react';
import Button from '../../atoms/Button';
import { PageHeaderProps } from './types';
import { cn } from '../../../libs/cn';
import { useController } from './useController';

const PageHeader: React.FC<PageHeaderProps> = (props) => {
	const { actions } = useController();
	return (
		<header
			className={cn(
				'flex w-full h-full items-center drop-shadow-md bg-white',
				props.className
			)}
		>
			<h1
				onClick={actions.gotoMovieList}
				className="m-0 pl-4 text-2xl font-semibold text-black flex-1"
			>
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
