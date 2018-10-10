import React, { Component } from 'react';
import CardSearch from './pages/card-search'
import { Grid } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardSearchState: {
        inputValue: '',
        cardName: 'Arcane Flight',
        cardType: 'Sorcery',
        cardImageUrl: 'https://img.scryfall.com/cards/png/en/ima/10.png?1530591620',
      },
      setSearchState: {},
    };

  }





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{ marginTop: '10px' }}>Ultimate MTG App</h1>
        </header>
        <Grid className="cardSearch">
          <CardSearch cardData={this.state.cardSearchState} />
        </Grid>
      </div >
    );
  }
}

export default App;
