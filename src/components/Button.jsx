import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className, value, colSpan = 1 }) => {
  let buttonClasses = "flex items-center justify-center text-2xl rounded-full h-14 w-14 m-1 font-medium";
  
  // Agregar clases según el tipo de botón
  if (className === 'operador') {
    buttonClasses += " bg-amber-500 text-white";
  } else if (className === 'borrar' || className === 'masmenos') {
    buttonClasses += " bg-gray-400 text-white";
  } else {
    buttonClasses += " bg-gray-700 text-white";
  }
  
  // Agregar clase para botones que ocupan 2 columnas
  if (colSpan === 2) {
    buttonClasses += " col-span-2 w-[118px] rounded-full";
  }

  return (
    <button 
      className={buttonClasses}
      onClick={() => onClick(value || children)}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  colSpan: PropTypes.number
};

export default Button