import React from 'react';
import { SliderProps } from './types';

const Slider: React.FC<SliderProps> = (props) => {
	return <input type="range" {...props} className="slider" />;
};

export default Slider;
