import React, { Component } from 'react';

//This is a class level component. Is this needed?
//Yes if we want to use lifecycle methods as below

class TodoList extends Component {

componentDidUpdate() {
  //The app works without this, so why is it needed?
  //sets the focus in the input area so we can continue typing the next item in the todo list.
  //componentDidUpdate is one of the lifecycle methods, which is called each time the comonent is updated.
    this.props.inputElement.current.focus()
  }

  render() {

  const header = {
  textAlign: 'center',
  fontSize: 'calc(10px + 4vmin)',
  color: 'black'
  };

  const inputstyle = {
  border: '2px solid black',
  borderRadius: '0px',
  fontSize: '28px',
  margin: '10px',
  };


 return (

    <div>

      <div style={header}>
        <form onSubmit={this.props.addItem}>
          <input 
          style={inputstyle}
          onChange={this.props.handleInput}
          ref={this.props.inputElement}
          value={this.props.currentItem.text}
          placeholder="Task" />
          <button style={inputstyle} type="submit"> Add Task </button>
        </form>
      </div>


    </div>

  )
 }
}

export default TodoList;