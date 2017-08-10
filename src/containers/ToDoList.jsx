import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ToDoItem from '../components/ToDoItem.jsx';
import { ButtonGroup } from 'react-bootstrap';

export default class ToDoList extends Component {

  handleOnClick = (label) => {
    this.props.doneToDo(label, this.props.isDone);
  };

  renderItems = () =>  this.props.toDoItems.map(
    (item, index) => <ToDoItem
      isDone={this.props.isDone}
      {...item}
      key={`todo-${index}`}
      handleOnClick={this.handleOnClick}
      deleteToDo={this.props.deleteToDo}
    />
  );



  render () {
    return (
      <ButtonGroup block >
        { this.renderItems() }
      </ButtonGroup>
    )
  }



}

ToDoList.propTypes = {
  toDoItems: PropTypes.arrayOf(PropTypes.object),
  isDone: PropTypes.boolean,
  doneToDo: PropTypes.function,
};