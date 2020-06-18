import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component.jsx';
import Searchbox from './components/search-box/search-box.component';
import animte from 'animate.css';
class App extends React.Component{
  constructor(){
    super();

    this.state={
      monsters : [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  handleChange = (e) =>{
    this.setState( {searchField : e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return(

      <div className="App intro">
      <h1 className="animate__animated animate__bounce">Cats Rolodex</h1>
      <Searchbox 
        placeholder="Search cat ..."
        handleChange={this.handleChange}
         />

        <CardList monsters={filteredMonsters}/>
      </div>

    )
  }
}

export default App;
