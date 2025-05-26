import PropTypes from 'prop-types';

export const CalculatorButtonsPropTypes = {
  toggleSign: PropTypes.func.isRequired,
  clearAll: PropTypes.func.isRequired,
  selectOperation: PropTypes.func.isRequired,
  addDigit: PropTypes.func.isRequired,
  addDecimal: PropTypes.func.isRequired,
};


export const ButtonPropTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  colSpan: PropTypes.number
};


export const DisplayPropTypes = {
  previousValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};