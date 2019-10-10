import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiels: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Respons => Respons.json())
      .then(user => this.setState({ monsters: user }));
  }
  handleChange = e => {
    this.setState({ searchFiels: e.target.value });
  };
  render() {
    const { monsters, searchFiels } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFiels.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        < SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
