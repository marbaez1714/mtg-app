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
        cardType: 'Type',
        cardUsd: 'Price',
        cardImageUrl: 'https://img.scryfall.com/cards/art_crop/en/dom/43.jpg?1524790424',
        cardLegalities: {
          "standard": ' ',
          "future": ' ',
          "frontier": ' ',
          "modern": ' ',
          "legacy": ' ',
          "pauper": ' ',
          "vintage": ' ',
          "penny": ' ',
          "commander": ' ',
          "1v1": ' ',
          "duel": ' ',
          "brawl": ' '
        }
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
    var self = this;
    var cardInfo = this.state.cardSearchState;
    var inputValue = this.state.cardSearchState.inputValue;
    var cardNameString = inputValue.split(" ").join("+");
    var getUrl = this.state.cardSearchState.fuzzyBase + cardNameString;

    axios.get(getUrl).then(function (response) {
      var data = response.data;
      cardInfo.cardName = data.name;
      cardInfo.cardType = data.type_line;
      cardInfo.cardImageUrl = data.image_uris.png;
      cardInfo.cardUsd = '$ ' + data.usd;
      cardInfo.cardLegalities = data.legalities
      self.setState({ cardSearchState: cardInfo })
      console.log(response.data);
    }).catch(function (error) {
      console.log("Opps! Something went wront!: ", error);
    });
    event.preventDefault();

  }




  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1 style={{ marginTop: '10px' }}>Ultimate MTG App</h1>
        </header>
        <Grid className="cardSearch">
          <CardSearch cardData={this.state.cardSearchState} changeValue={this.handleSearchChange} cardSearch={this.handleSearch} />
        </Grid>
      </div >
    );
  }
}

export default App;
