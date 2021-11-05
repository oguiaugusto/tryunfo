import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'hidden',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.checkFields = this.checkFields.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({ [name]: value }, () => {
      this.checkFields();
    });
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

    const { onInputChange } = this;

    return (
      <>
        <header className="header">
          <h1>Tryunfo</h1>
        </header>
        <main className="main-content">
          <Form { ...formStates } onInputChange={ onInputChange } />
          <Card { ...formStates } />
        </main>
      </>
    );
  }
}

export default App;
