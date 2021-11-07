import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends React.Component {
  render() {
    const {
      filteredCards,
      onRemoveButtonClick,
      nameFilter,
      rareFilter,
      filterInput,
    } = this.props;
    const removeButton = true;

    return (
      <>
        <p className="p-title" id="all-cards-title">Todas as cartas</p>
        <section className="all-cards-container">
          <div className="filter-cards">
            <p>Filtro de busca</p>
            <input
              data-testid="name-filter"
              className="filter-input"
              placeholder="Nome da Carta"
              type="text"
              name="nameFilter"
              value={ nameFilter }
              onChange={ filterInput }
            />
            <select
              data-testid="rare-filter"
              name="rareFilter"
              id="rareFilter"
              className="filter-input filter-select"
              value={ rareFilter }
              onChange={ filterInput }
            >
              Raridade
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
            <button
              className="button blue-button"
              type="button"
            >
              Buscar
            </button>
          </div>
          <div className="saved-cards">
            {filteredCards.map((card) => {
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
          </div>
        </section>
      </>
    );
  }
}

AllCards.propTypes = {
  filteredCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveButtonClick: PropTypes.func.isRequired,
  filterInput: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
};

export default AllCards;
