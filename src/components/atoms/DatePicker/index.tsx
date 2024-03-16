import React from 'react';
import { DatePickerProps } from './types';
import { cn } from '../../../libs/cn';

const DatePicker: React.FC<DatePickerProps> = () => {
	return (
		<input
			type="date"
			className={cn(
				'p-2 border-black/40 rounded bg-gray-200 focus-visible:outline-none'
			)}
		/>
	);
};

export default DatePicker;
