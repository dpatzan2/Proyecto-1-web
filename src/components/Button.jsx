import React from 'react';
import PropTypes from 'prop-types';
import { DisplayPropTypes } from '../types/propTypes';

export const Button = ({ children, onClick, className, value, colSpan = 1 }) => (
  <button className={`flex items-center justify-center text-2xl rounded-full h-14 m-1 font-medium ${className === 'operador' ? 'bg-amber-500' : (className === 'borrar' || className === 'masmenos') ? 'bg-gray-400' : 'bg-gray-700'} text-white ${colSpan === 2 ? 'col-span-2 w-[118px]' : 'w-14'}`}
    onClick={() => onClick(value || children)}>
    {children}
  </button>
); Button.propTypes = DisplayPropTypes

export default Button;