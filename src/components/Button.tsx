// Button.tsx
import React from 'react';
import { ButtonProps } from '../../types';
import { twMerge } from 'tailwind-merge';

const Button: React.FC<ButtonProps> = ({ children, className ,...props }) => {
  return (
    <button
      className={twMerge(`bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded`, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
