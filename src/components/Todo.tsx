import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Todo.css';

export interface TodoInterface {
  id: string;
  title: string;
  notes: string;
}

interface TodoProps extends TodoInterface {
  removeTodo: (id: string) => void;
}

interface TodoState {
  title: string;
  notes: string;
}

export class Todo extends Component<TodoProps, TodoState> {
  constructor(props: TodoProps) {
    super(props);
    const { title, notes } = props;
    this.state = { title, notes };
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    removeTodo: PropTypes.func.isRequired
  };

  onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ title: e.currentTarget.value });
  };

  onChangeNotes = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({ notes: e.currentTarget.value });
  };

  render() {
    const { removeTodo, id } = this.props;
    const { title, notes } = this.state;
    return (
      <div className='todo'>
        <div className='todo-title'>
          <input
            name='title'
            placeholder='Title'
            type='text'
            value={title}
            onChange={this.onChangeTitle}
          />
        </div>
        <div className='todo-delete'>
          <button onClick={() => removeTodo(id)}>Delete</button>
        </div>
        <div className='todo-notes'>
          <textarea
            name='notes'
            placeholder='Notes...'
            value={notes}
            onChange={this.onChangeNotes}
          ></textarea>
        </div>
        <div className='todo-empty'></div>
      </div>
    );
  }
}

export default Todo;
