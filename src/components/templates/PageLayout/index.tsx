import BottomNavbar from '../../../components/organisms/BottomNavBar';
import PageHeader from '../../../components/organisms/PageHeader';
import React from 'react';
import { PageLayoutProps } from './types';
import { useController } from './useController';
import FilterSidebar from '../../organisms/FilterSidebar';
import { cn } from '../../../libs/cn';

const PageLayout: React.FC<PageLayoutProps> = (props) => {
	const { values, actions } = useController();
	return (
		<div className="flex flex-col w-full h-screen bg-gray-400 py-20">
			<PageHeader
				onSortClick={actions.openFilter}
				className="h-20 fixed top-0 left-0 right-0"
			/>
			<div
				className={cn(
					'flex flex-col overflow-y-auto overflow-x-hidden w-full flex-1 px-4 py-6',
					props.className
				)}
			>
				{props.children}
			</div>
			<BottomNavbar className="h-20 fixed bottom-0 left-0 right-0" />
			<FilterSidebar
				isOpen={values.isFilterOpen}
				onClose={actions.closeFilter}
			/>
		</div>
	);
};

export default PageLayout;
