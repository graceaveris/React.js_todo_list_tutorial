import React, { Component } from 'react'

class TodoItems extends Component {
  

//Function that renders each list item via map w delete bttn
  createTasks = item => {
    return (  
    <li key={item.key}
        onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
    </li>
)}


  render() {

    const list = {
	  textAlign: 'center',
	  fontSize: 'calc(10px + 4vmin)',
	  color: 'white',
	  lineHeight: '1.3',
	};

//copy the state array items via the passed entries prop
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return ( 
      <ul style={list}>{listItems}</ul> 
    )
  }
}

export default TodoItems