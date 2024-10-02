import React from 'react';

import { ProgressBar } from 'primereact/progressbar';
        
const Progressbar = ({ value, color, className, maxValue }) => {
  const progressWidth = maxValue ? ((value / maxValue) * 100).toFixed(2) : value;
  return (
    <ProgressBar value={progressWidth} className={` h-5 rounded-xl ${className}`} color={color} ></ProgressBar>
  );
};

export default Progressbar;
