import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';
import TodoList from './TodoList/TodoList'
import TodoItems from './TodoItems/TodoItems'

//constructor and super are added. Why? So we can create our ref?
class App extends Component {
  constructor() {
    super();


//WHAT is this? Its a new inbuilt method...
//"Refs provide a way to access DOM nodes or React elements created in the render method."
//We have created a ref using the method, and stored it in this.inputfield
//I THINK that this is an automates way of creating a ref, like I was maually assigning before...
    this.inputElement = React.createRef();

    this.state = {
      items: [],
      currentItem: {text:'', key:''},
  }
}


//Updates the field to reflect wha you are typing in.
//Stored in currentItem, with a 'key' which is the current date/time.
handleInput = event => {
  const itemText = event.target.value;
  const currentItem = { text: itemText, key: Date.now() }
  this.setState({
    currentItem,
  })
  console.log(currentItem)
  console.log(currentItem.key)
}


//Handles click and adds the item to the list
addItem = event => {
  event.preventDefault();
  const newItem = this.state.currentItem

//checks to make sure the input isnt empty
  if (newItem.text !== '') {

//does this directly mutate state? This is instead of pushing into a copy prior to set state
    const items = [...this.state.items, newItem]
    this.setState({
      items: items,
//Then we set the state of current item back to 0
      currentItem: { text:'', key:'' },
    })
  }
}


//This filters items by removing the item with the matching key
deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
    items: filteredItems,
  })
}


render() {

    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day Ten / A Different POV</h2>
        </header>
    

      <TodoList
        addItem={this.addItem}
        inputElement={this.inputElement} 
        handleInput={this.handleInput}
        currentItem={this.state.currentItem}
      />

      <TodoItems 
       entries={this.state.items}
       deleteItem={this.deleteItem}
      />

    </div>
    );
  }
}

export default App;

