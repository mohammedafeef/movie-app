import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'filled' | 'outlined';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonVariant;
}
