import React from 'react';
import { ButtonPropTypes } from '../types/propTypes';


const Display = ({ previousValue, currentValue }) => {
  return (
    <div className="col-span-4 bg-gray-800 rounded-3xl p-4 m-2 mb-4 flex flex-col items-end justify-end h-28">
      <div className="text-lg text-gray-400">{previousValue}</div>
      <div className="text-3xl text-white">{currentValue}</div>
    </div>
  )
}; Display.propTypes = ButtonPropTypes

export default Display