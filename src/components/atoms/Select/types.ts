import { SelectHTMLAttributes } from 'react';

type Option = {
	value: string;
	label: string;
};
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options: Option[];
}
