import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="form">
        <input data-testid="name-input" type="text" />
        <textarea data-testid="description-input" />
        <input data-testid="attr1-input" type="number" />
        <input data-testid="attr2-input" type="number" />
        <input data-testid="attr3-input" type="number" />
        <input data-testid="image-input" type="text" />
        <select
          data-testid="rare-input"
          name="rare-input"
          id="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
          <option
            value="placeholder"
            selected
            disabled
            hidden
          >
            Selecione uma Radidade
          </option>
        </select>
        <input data-testid="trunfo-input" type="checkbox" />
        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default Form;
