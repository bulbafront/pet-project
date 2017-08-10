import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button,ButtonGroup } from 'react-bootstrap';


export default class ToDoList extends Component {

  handleOnClickToDo = () => this.props.handleOnClick(this.props.label);
  deleteToDo = () => this.props.deleteToDo(this.props.label, this.props.isDone);

  render () {
    return (
      <div className="to-do-item">
          <Button
            bsStyle={"item"}
            onClick={this.handleOnClickToDo}
          >
            {this.props.subject}
          </Button>
          <Button onClick={this.deleteToDo} bsStyle="danger">X</Button>
      </div>
    )
  }



}

ToDoList.propTypes = {
  subject: PropTypes.string,
  isDone: PropTypes.boolean,
};