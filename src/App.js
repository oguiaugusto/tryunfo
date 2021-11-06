import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import SavedCards from './components/SavedCards';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,

      savedCards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.checkFields = this.checkFields.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.setSuperTrunfo = this.setSuperTrunfo.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({ [name]: value }, () => {
      this.checkFields();
    });
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCards,
      isSaveButtonDisabled,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    let allCards = [];
    if (!isSaveButtonDisabled) {
      allCards = [...savedCards, newCard];
    }

    this.setState({ savedCards: allCards }, () => {
      this.clearFields();
      if (cardTrunfo) this.setSuperTrunfo();
    });
  }

  setSuperTrunfo() {
    this.setState({ hasTrunfo: true });
  }

  checkFields() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const att1 = parseInt(cardAttr1, 10);
    const att2 = parseInt(cardAttr2, 10);
    const att3 = parseInt(cardAttr3, 10);

    const allAttributes = att1 + att2 + att3;
    const max = 90;
    const maxTotal = 210;
    const filledInfo = [
      cardName === '',
      cardDescription === '',
      cardImage === '',
      cardRare === 'hidden',
      allAttributes > maxTotal,
      att1 < 0 || att1 > max,
      att2 < 0 || att2 > max,
      att3 < 0 || att3 > max,
    ];

    const enabled = filledInfo.every((field) => field !== true);

    if (enabled) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  clearFields() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
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
      savedCards,
    } = this.state;

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

    const { onInputChange, onSaveButtonClick, setSuperTrunfo } = this;

    return (
      <>
        <header className="header">
          <h1>Tryunfo</h1>
        </header>
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
              <Card { ...formStates } />
            </section>
          </section>
          <SavedCards savedCards={ savedCards } />
        </main>
      </>
    );
  }
}

export default App;
