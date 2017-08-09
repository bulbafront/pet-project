import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { initialToDo } from './constants/initialToDo.js';
import ToDoList from './containers/ToDoList.jsx';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Form, Button } from 'react-bootstrap';
import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toDoItems: initialToDo,
      toDoItemsDone: [],
    };
    this.labelInput = false;
    this.subjectInput = false;
  }

  resetFields = () => {
    if (this.subjectInput && this.labelInput) {
      this.subjectInput.value = '';
      this.labelInput.value = '';
    }
  };

  addNewToDo = () => {
    const label = this.labelInput ? this.labelInput.value : false;
    const subject = this.subjectInput ? this.subjectInput.value : false;
    if (label && subject) {
      const toDoItems = [].concat(this.state.toDoItems, [{ label, subject }]);
      this.setState({ toDoItems }, this.resetFields)
    }
  };


  doneToDo = (label, isDone) => {
    const removeArrayName = isDone ? 'toDoItemsDone' : 'toDoItems';
    const addArrayName = !isDone ? 'toDoItemsDone' : 'toDoItems';
    const removeArray = [].concat(this.state[removeArrayName]);
    const addArray = [].concat(this.state[addArrayName], _.remove(removeArray, { label }));
    this.setState({ [addArrayName]: addArray, [removeArrayName]: removeArray });
  };


  deleteToDo = (label, isDone) => {
    const removeArrayName = isDone ? 'toDoItemsDone' : 'toDoItems';
    const removeArray = [].concat(this.state[removeArrayName]);
    _.remove(removeArray, { label });
    this.setState({ [removeArrayName]: removeArray });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>New Pet Project</h2>
        </div>

        <Grid>
          <Row>
            <h3>To Do List</h3>
            <Col md={6} sm={12}>
              <h4>Need To Do</h4>
              <ToDoList toDoItems={this.state.toDoItems} doneToDo={this.doneToDo} deleteToDo={this.deleteToDo} />
            </Col>
            <Col md={6} sm={12}>
              <h4>Done</h4>
              <ToDoList toDoItems={this.state.toDoItemsDone} doneToDo={this.doneToDo} deleteToDo={this.deleteToDo} isDone />
            </Col>
          </Row>
          <Row>
            <h3>Add New To Do</h3>
            <Col mdOffset={3} sm={12} md={6}>
              <Form >
                <FormGroup>
                  <ControlLabel>Label</ControlLabel>
                  {' '}
                  <FormControl inputRef={ref => { this.labelInput = ref; }} type="text" placeholder="Label" />
                </FormGroup>
                <FormGroup >
                  <ControlLabel>Subject</ControlLabel>
                  <FormControl inputRef={ref => { this.subjectInput = ref; }} componentClass="textarea" placeholder="Subject" />
                </FormGroup>
                <Button onClick={this.addNewToDo}>
                  Add To Do
                </Button>
              </Form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
