import './App.css';
import React from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search_box.component';
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
      <h1 className='app-title'>Monsters Rolodex</h1>
       <SearchBox onSearchChange = {onSearchChange} placeholder='Search monsters...' className = 'search-box'/>
      <CardList monsters ={filteredMonsters} />
      </div>
    )
  }
}
export default App;