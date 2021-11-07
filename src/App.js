import React from 'react';
import MainContent from './components/MainContent';

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
      filteredCards: [],

      nameFilter: '',
      rareFilter: 'todas',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.checkFields = this.checkFields.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.setSuperTrunfo = this.setSuperTrunfo.bind(this);
    this.onRemoveButtonClick = this.onRemoveButtonClick.bind(this);
    this.filterInput = this.filterInput.bind(this);
    this.filterCards = this.filterCards.bind(this);
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
    if (!isSaveButtonDisabled) allCards = [...savedCards, newCard];

    this.setState({ savedCards: allCards, filteredCards: allCards }, () => {
      this.clearFields();
      if (cardTrunfo) this.setSuperTrunfo();
    });
  }

  onRemoveButtonClick({ target }) {
    const { name } = target;
    const { savedCards } = this.state;
    const newSavedCards = savedCards.filter((card) => card.cardName !== name);

    const isTrunfo = savedCards.find((card) => card.cardName === name).cardTrunfo;

    if (isTrunfo) {
      this.setState({ hasTrunfo: false });
    }

    this.setState({
      savedCards: newSavedCards,
      filteredCards: newSavedCards,
    });
  }

  setSuperTrunfo() {
    this.setState({ hasTrunfo: true });
  }

  filterInput({ target: { name, value } }) {
    this.setState({ [name]: value }, () => {
      this.filterCards();
    });
  }

  filterCards() {
    const { nameFilter, rareFilter, savedCards, filteredCards } = this.state;

    this.setState({
      filteredCards: savedCards.filter((card) => (
        card.cardName.toLowerCase().includes(nameFilter.toLowerCase()))),
    });

    if (rareFilter !== 'todas') {
      this.setState({
        filteredCards: filteredCards.filter((card) => card.cardRare === rareFilter),
      });
    }
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
      filteredCards,
      nameFilter,
      rareFilter,
    } = this.state;

    const {
      onInputChange,
      onSaveButtonClick,
      setSuperTrunfo,
      onRemoveButtonClick,
      filterInput,
    } = this;

    const mainProps = {
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
      onInputChange,
      onSaveButtonClick,
      setSuperTrunfo,
      onRemoveButtonClick,
      filterInput,
    };

    return (
      <>
        <header className="header">
          <h1>Tryunfo</h1>
        </header>
        <MainContent { ...mainProps } />
      </>
    );
  }
}

export default App;
