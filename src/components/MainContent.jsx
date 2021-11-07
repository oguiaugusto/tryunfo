import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Card from './Card';
import AllCards from './AllCards';

class MainContent extends Component {
  render() {
    const {
      onInputChange,
      onSaveButtonClick,
      setSuperTrunfo,
      onRemoveButtonClick,
      filterInput,

      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,

      filteredCards,
      nameFilter,
      rareFilter,
    } = this.props;

    const formStates = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    };

    const filterStates = { nameFilter, rareFilter };

    const removeButton = false;

    return (
      <main className="main-content">
        <section className="create-card">
          <Form
            { ...formStates }
            onInputChange={ onInputChange }
            onSaveButtonClick={ onSaveButtonClick }
            setSuperTrunfo={ setSuperTrunfo }
          />
          <section className="preview">
            <p className="p-title">Pré-visualização</p>
            <Card
              { ...formStates }
              removeButton={ removeButton }
              onRemoveButtonClick={ onRemoveButtonClick }
            />
          </section>
        </section>
        <AllCards
          filteredCards={ filteredCards }
          filterInput={ filterInput }
          onRemoveButtonClick={ onRemoveButtonClick }
          { ...filterStates }
        />
      </main>
    );
  }
}

MainContent.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  setSuperTrunfo: PropTypes.func.isRequired,
  onRemoveButtonClick: PropTypes.func.isRequired,
  filterInput: PropTypes.func.isRequired,

  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,

  filteredCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
};

export default MainContent;
