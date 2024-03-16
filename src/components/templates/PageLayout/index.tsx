import BottomNavbar from '../../../components/organisms/BottomNavBar';
import PageHeader from '../../../components/organisms/PageHeader';
import React from 'react';

const PageLayout: React.FC = () => {
	return (
		<div className="flex flex-col w-full h-screen bg-gray-400 py-20">
			<PageHeader className="h-20 fixed top-0 left-0 right-0" />
			<div className="flex flex-col overflow-y-auto overflow-x-hidden w-full flex-1 p-4">
				something
			</div>
			<BottomNavbar className="h-20 fixed bottom-0 left-0 right-0" />
		</div>
	);
};

export default PageLayout;
