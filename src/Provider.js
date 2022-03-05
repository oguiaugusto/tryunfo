/* eslint-disable object-property-newline */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const MAX_ATTRIBUTE = 90;
const MAX_TOTAL_ATTRIBUTES = 210;
const cardInitialState = {
  name: '',
  description: '',
  attr1: '0',
  attr2: '0',
  attr3: '0',
  image: '',
  rarity: 'normal',
  trunfo: false,
};

export default function Provider({ children }) {
  const [card, setCard] = useState(cardInitialState);
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    rarity: 'raridade',
    trunfo: false,
  });
  const [disableSaveBtn, setDisableSaveBtn] = useState(true);

  const saveCard = () => {
    setSavedCards([...savedCards, card]);
    if (card.trunfo) setHasTrunfo(true);
    setCard(cardInitialState);

    // localStorage.setItem(JSON.stringify([...savedCards, card]), 'trunfoCards');
  };

  const removeCard = (cardToRemove) => setSavedCards(
    savedCards.filter((c) => JSON.stringify(c) !== JSON.stringify(cardToRemove)),
  );

  // useEffect(() => {}, []);

  useEffect(() => {
    const summedAttributes = Number(card.attr1) + Number(card.attr2) + Number(card.attr3);
    setDisableSaveBtn(
      card.name === ''
      || card.description === ''
      || card.image === ''
      || Number(card.attr1) < 0 || Number(card.attr1) > MAX_ATTRIBUTE
      || Number(card.attr2) < 0 || Number(card.attr2) > MAX_ATTRIBUTE
      || Number(card.attr3) < 0 || Number(card.attr3) > MAX_ATTRIBUTE
      || summedAttributes > MAX_TOTAL_ATTRIBUTES,
    );
  }, [card]);

  const value = {
    card, hasTrunfo, savedCards, filters, disableSaveBtn,
    setCard, setHasTrunfo, setSavedCards, setFilters,
    saveCard, removeCard,
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
