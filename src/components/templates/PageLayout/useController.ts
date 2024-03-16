import React from 'react';

export const useController = () => {
	const [isFilterOpen, setIsFilterOpen] = React.useState(false);

	const openFilter = () => setIsFilterOpen(true);
	const closeFilter = () => setIsFilterOpen(false);

	return {
		values: {
			isFilterOpen,
		},
		actions: {
			openFilter,
			closeFilter,
		},
	};
};
