import React, { Component } from 'react';
import List from './list';
import ListItem from './listItem';
import Panel from './panel';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App well">
        <List />
      </div>
    );
  }
}

export default App;
