import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Provider';

export default function Card({ formCard, card }) {
  const { card: contextCard, removeCard } = useContext(Context);
  if (formCard) card = contextCard;

  return (
    <div className="card-container">
      <div className="card-border">
        <div className="card">
          <div className="card-header">
            <p data-testid="name-card">{card.name}</p>
          </div>
          <div className="card-main">
            {card.trunfo && (
              <p className="card-trunfo" data-testid="trunfo-card">
                Super Trunfo
              </p>
            )}
            <img data-testid="image-card" src={ card.image } alt={ card.name } />
            <p data-testid="description-card" className="description-card">
              {card.description}
            </p>
          </div>
          <div className="card-attributes">
            <p data-testid="attr1-card">
              Att 01 . . . . . . . .
              {card.attr1}
            </p>
            <p data-testid="attr2-card">
              Att 02 . . . . . . . .
              {card.attr2}
            </p>
            <p data-testid="attr3-card">
              Att 03 . . . . . . . .
              {card.attr3}
            </p>
            <p className="rarity" data-testid="rare-card">
              {card.rarity}
            </p>
          </div>
        </div>
      </div>
      {
        formCard ? null : (
          <div className="card-remove-button">
            <button
              data-testid="delete-button"
              type="button"
              className="button blue-hover-button remove-button"
              onClick={ () => removeCard(card) }
            >
              Excluir
            </button>
          </div>
        )
      }
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.objectOf(PropTypes.any),
  formCard: PropTypes.bool,
};

Card.defaultProps = {
  card: {},
  formCard: false,
};
