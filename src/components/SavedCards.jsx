import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class SavedCards extends React.Component {
  render() {
    const { savedCards, onRemoveButtonClick } = this.props;
    const removeButton = true;

    return (
      <section className="saved-cards">
        {savedCards.map((card) => {
          const {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          } = card;

          const cardStates = {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          };

          return (
            <Card
              key={ cardName }
              { ...cardStates }
              onRemoveButtonClick={ onRemoveButtonClick }
              removeButton={ removeButton }
            />
          );
        })}
      </section>
    );
  }
}

SavedCards.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveButtonClick: PropTypes.func.isRequired,
};

export default SavedCards;
