import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Provider';

const RARITY_OPTIONS = ['Normal', 'Raro', 'Muito Raro'];

export default function FilterInput({ name, placeholder, testid, type }) {
  const { filters, setFilters } = useContext(Context);

  const handleChange = ({ target: { value, checked } }) => {
    if (type === 'checkbox') value = checked;
    setFilters({ ...filters, [name]: value });
  };

  if (type === 'select') {
    return (
      <select
        data-testid={ testid }
        type="text"
        name={ name }
        value={ filters[name] }
        onChange={ handleChange }
        disabled={ filters.trunfo }
      >
        <option disabled hidden value="raridade">Raridade</option>
        <option value="">Todas</option>
        {
          RARITY_OPTIONS.map((op) => (
            <option key={ `${op}-key` } value={ op.toLowerCase() }>{op}</option>
          ))
        }
      </select>
    );
  }

  return (
    <input
      data-testid={ testid }
      type={ type }
      name={ name }
      id={ `filter-${name}` }
      placeholder={ placeholder }
      value={ filters[name] }
      onChange={ handleChange }
      disabled={ name !== 'trunfo' && filters.trunfo }
    />
  );
}

FilterInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  testid: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FilterInput.defaultProps = {
  placeholder: '',
  type: 'text',
};
