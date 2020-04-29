import React, { Component, Fragment } from 'react';
import shortid from 'shortid';
import '../styles/TodoContainer.css';
import { TodoInterface, Todo } from './Todo';

interface ContainerProps {}

interface ContainerState {
  todos: TodoInterface[];
}

export class TodoContainer extends Component<ContainerProps, ContainerState> {
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

  removeTodo = (id: string): void => {
    const { todos } = this.state;
    const newTodos: Array<TodoInterface> = todos.filter(
      (todo: TodoInterface) => todo.id !== id
    );
    this.setState({ todos: newTodos });
  };

  addTodo = () => {
    const newTodo: TodoInterface = {
      id: shortid.generate(),
      title: '',
      notes: ''
    };
    this.setState({
      todos: this.state.todos.concat(newTodo)
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <Fragment>
        <div className='header'>
          <div className='title'>
            <h1>Todo list</h1>
          </div>
          <div className='add'>
            <button onClick={this.addTodo}>Add</button>
          </div>
        </div>
        <div className='todo-container'>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              notes={todo.notes}
              removeTodo={this.removeTodo}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default TodoContainer;
