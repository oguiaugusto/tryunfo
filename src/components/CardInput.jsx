import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Provider';

export default function CardInput({ name, testid, labelName, type, options }) {
  const { card, setCard } = useContext(Context);

  const handleChange = ({ target: { value, checked } }) => {
    if (type === 'checkbox') value = checked;
    setCard({ ...card, [name]: value });
  };

  if (type === 'select') {
    return (
      <label htmlFor={ `card-${name}` }>
        {labelName}
        <select
          data-testid={ testid }
          name={ name }
          id={ `card-${name}` }
          value={ card[name] }
          onChange={ handleChange }
        >
          {
            options.map((op) => (
              <option key={ `${op}-key` } value={ op.toLowerCase() }>{op}</option>
            ))
          }
        </select>
      </label>
    );
  }

  return (
    <label htmlFor={ `card-${name}` }>
      {labelName}
      <input
        data-testid={ testid }
        type={ type }
        name={ name }
        id={ `card-${name}` }
        value={ card[name] }
        checked={ card[name] }
        onChange={ handleChange }
      />
    </label>
  );
}

CardInput.propTypes = {
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

CardInput.defaultProps = {
  type: 'text',
  options: [],
};
