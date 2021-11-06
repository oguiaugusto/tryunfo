import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      removeButton,
      onRemoveButtonClick,
    } = this.props;

    const button = (
      <div className="card-remove-button">
        <button
          data-testid="delete-button"
          type="button"
          className="button blue-hover-button remove-button"
          name={ cardName }
          onClick={ onRemoveButtonClick }
        >
          Excluir
        </button>
      </div>
    );

    return (
      <div className="card-container">
        <div className="card-border">
          <div className="card">
            <div className="card-header">
              <p data-testid="name-card">{ cardName }</p>
            </div>
            <div className="card-main">
              {cardTrunfo
                && <p className="card-trunfo" data-testid="trunfo-card">Super Trunfo</p>}
              <img data-testid="image-card" src={ cardImage } alt={ cardName } />
              <p
                data-testid="description-card"
                className="description-card"
              >
                { cardDescription }
              </p>
            </div>
            <div className="card-attributes">
              <p data-testid="attr1-card">
                Att 01 . . . . . . . .
                { cardAttr1 }
              </p>
              <p data-testid="attr2-card">
                Att 02 . . . . . . . .
                { cardAttr2 }
              </p>
              <p data-testid="attr3-card">
                Att 03 . . . . . . . .
                { cardAttr3 }
              </p>
              <p className="rarity" data-testid="rare-card">{ cardRare }</p>
            </div>
          </div>
        </div>
        {removeButton && button}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  removeButton: PropTypes.bool.isRequired,
  onRemoveButtonClick: PropTypes.func.isRequired,
};

export default Card;
