import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();

    this.remainingPoints = this.remainingPoints.bind(this);
  }

  remainingPoints(max, p1, p2, p3) {
    const total = parseInt(p1, 10) + parseInt(p2, 10) + parseInt(p3, 10);
    const remaining = max - total;
    return remaining;
  }

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

    const { remainingPoints } = this;

    const max = 210;

    const checkTrunfo = (
      <label className="form-label-inline cardTrunfo-label" htmlFor="cardTrunfo">
        <input
          data-testid="trunfo-input"
          className="cardTrunfo"
          type="checkbox"
          name="cardTrunfo"
          id="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Carta Super Trunfo?
      </label>
    );

    const noCheckTrunfo = (
      <p className="trunfo-validated">Você já tem um Super Trunfo em seu baralho</p>
    );

    return (
      <section className="form-side">
        <form className="form">
          <p className="p-title">Adicionar Nova Carta</p>
          <label className="form-label" htmlFor="cardName">
            Nome
            <input
              data-testid="name-input"
              type="text"
              name="cardName"
              id="cardName"
              placeholder="Qual o nome da carta?"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label className="form-label" htmlFor="cardDescription">
            Descrição
            <textarea
              data-testid="description-input"
              name="cardDescription"
              id="cardDescription"
              placeholder="O que ela faz?"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label className="form-label-inline" htmlFor="cardAttr1">
            Attr 01
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label className="form-label-inline" htmlFor="cardAttr2">
            Attr 02
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label className="form-label-inline" htmlFor="cardAttr3">
            Attr 03
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <p className="remaining-points">
            Pontos restantes:&nbsp;
            {remainingPoints(max, cardAttr1, cardAttr2, cardAttr3)}
          </p>
          <label className="form-label-inline" htmlFor="cardImage">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              name="cardImage"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label className="form-label" htmlFor="cardRare">
            Selecione a Raridade
            <select
              data-testid="rare-input"
              name="cardRare"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          {hasTrunfo ? noCheckTrunfo : checkTrunfo}
          <button
            data-testid="save-button"
            className="button blue-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
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
