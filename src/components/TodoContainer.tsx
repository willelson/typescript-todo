import React, { Component, Fragment } from 'react';
import '../styles/TodoContainer.css';
import { TodoInterface } from './Todo';

interface ContainerProps {}

interface ContainerState {
  todos?: TodoInterface[];
}

export class TodoContainer extends Component<ContainerState> {
  constructor(props: ContainerProps) {
    super(props);
    this.state = {
      todos: [
        {
          id: 'gS_JSHD2lW',
          title: 'Hello World',
          notes: 'Create a basic todo app...'
        },
        {
          id: '7mVUWDVFNB',
          title: 'Make toast',
          notes: 'Spread peanut butter on there.'
        }
      ]
    };
  }

  render() {
    return (
      <Fragment>
        <div className='header'>
          <div className='title'>
            <h1>Todo list</h1>
          </div>
          <div className='add'>
            <button>Add</button>
          </div>
        </div>
        {/* <div className='todo-container'>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                notes={todo.notes}
                removeTodo={this.removeTodo}
              />
            ))}
          </div> */}
      </Fragment>
    );
  }
}

export default TodoContainer;
