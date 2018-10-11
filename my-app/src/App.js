import React, { Component } from 'react';
import axios from 'axios';
import CardSearch from './pages/card-search'
import { Grid } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardSearchState: {
        inputValue: '',
        fuzzyBase: 'https://api.scryfall.com/cards/named?fuzzy=',
        cardName: 'Lets find your card!',
        cardType: 'Sorcery',
        cardImageUrl: 'https://img.scryfall.com/cards/png/en/ima/10.png?1530591620',
      },
      setSearchState: {},
      test: "",
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }



  handleSearchChange(event) {
    var newValue = this.state.cardSearchState;
    newValue.inputValue = event.target.value;
    this.setState({ cardSearchState: newValue });
  }

  handleSearch(event) {
    var inputValue = this.state.cardSearchState.inputValue;
    var cardNameString = inputValue.split(" ").join("+");
    var getUrl = this.state.cardSearchState.fuzzyBase + cardNameString;
    this.setState({ test: getUrl })
    event.preventDefault();
    event.stopPropagation();
  }




  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1 style={{ marginTop: '10px' }}>Ultimate MTG App</h1>
        </header>
        <Grid className="cardSearch">
          <CardSearch cardData={this.state.cardSearchState} changeValue={this.handleSearchChange} cardSearch={this.handleSearch} test={this.state.test} />
        </Grid>
      </div >
    );
  }
}

export default App;
