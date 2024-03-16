import React from 'react';
import Button from '../../atoms/Button';

const PageHeader: React.FC = () => {
	return (
		<header className="flex w-full h-full items-center drop-shadow-md bg-white">
			<h1 className="m-0 pl-4 text-2xl font-semibold text-black flex-1">
				Movie App
			</h1>
			<Button className="px-4 h-full flex items-center">Sort & Filter</Button>
		</header>
	);
};

export default PageHeader;
