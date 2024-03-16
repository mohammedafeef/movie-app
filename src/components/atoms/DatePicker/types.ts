import { InputHTMLAttributes } from 'react';

export type DatePickerProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'type'
>;
