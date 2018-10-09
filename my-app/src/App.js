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
        cardName: '',
        cardType: '',
        cardImageUrl: '',
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
          <CardSearch />
        </Grid>
      </div >
    );
  }
}

export default App;
