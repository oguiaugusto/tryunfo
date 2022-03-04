/* eslint-disable object-property-newline */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export default function Provider({ children }) {
  const [card, setCard] = useState({
    name: '',
    description: '',
    attr1: '0',
    attr2: '0',
    attr3: '0',
    image: '',
    rarity: 'normal',
    trunfo: false,
  });
  const [savedCards, setSavedCards] = useState([]);
  const [filter, setFilter] = useState({
    name: '',
    rarity: '',
    trunfo: '',
  });

  const value = {
    card, savedCards, filter,
    setCard, setSavedCards, setFilter,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
