import React, { Component } from 'react';
import './App.css';

import Board from './Board/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">qulture_checkers</h1>
        </header>
        <Board />
      </div>
    );
  }
}

export default App;
