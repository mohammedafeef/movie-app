import React from 'react';
import { SliderProps } from './types';
import { cn } from '../../../libs/cn';

const Slider: React.FC<SliderProps> = (props) => {
	return (
		<input type="range" {...props} className={cn('slider', props.className)} />
	);
};

export default Slider;
