import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">
        <input
          data-testid="name-input"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
        />
        <textarea
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr1-input"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr2-input"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr3-input"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <input
          data-testid="image-input"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <select
          data-testid="rare-input"
          name="rare-input"
          id="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
          <option
            value="placeholder"
            disabled
            hidden
          >
            Selecione uma Radidade
          </option>
        </select>
        <input
          data-testid="trunfo-input"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
