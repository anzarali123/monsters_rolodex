import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    }
  }

  onSearchChange = event => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=> {
      return {searchField}
    });
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState(() => {
        return {monsters:users}
      })
    })
  }
  

  render() {
    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    })
    return (
      <div>
      <input type="search" placeholder='Search monsters...' className='search-box' 
       onChange={onSearchChange}
       />
      {
        filteredMonsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
      }
      </div>
    )
  }
}
export default App;