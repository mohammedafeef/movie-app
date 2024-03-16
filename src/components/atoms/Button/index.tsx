import React from 'react';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = (props) => {
	return <button {...props} />;
};

export default Button;
