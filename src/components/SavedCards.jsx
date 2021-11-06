import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class SavedCards extends React.Component {
  render() {
    const { savedCards } = this.props;

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

          return <Card key={ cardName } { ...cardStates } />;
        })}
      </section>
    );
  }
}

SavedCards.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SavedCards;
