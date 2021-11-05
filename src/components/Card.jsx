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
    } = this.props;

    return (
      <section className="preview">
        <p className="preview-title">Pré-visualização</p>
        <div className="card-preview">
          <div className="card-preview-header">
            <p data-testid="name-card">{ cardName }</p>
          </div>
          <div className="card-preview-main">
            {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
            <img data-testid="image-card" src={ cardImage } alt={ cardName } />
            <p data-testid="description-card">{ cardDescription }</p>
          </div>
          <div className="card-preview-attributes">
            <p data-testid="attr1-card">{ cardAttr1 }</p>
            <p data-testid="attr2-card">{ cardAttr2 }</p>
            <p data-testid="attr3-card">{ cardAttr3 }</p>
          </div>
          <div className="card-preview-rarity">
            <p data-testid="rare-card">{ cardRare }</p>
          </div>
        </div>
      </section>
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
};

export default Card;
