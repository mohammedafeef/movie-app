import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'rounded' | 'default';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}
