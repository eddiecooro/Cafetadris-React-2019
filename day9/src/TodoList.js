import React, { Component } from 'react';
import styles from './TodoList.module.css';
import TodoListItem from './TodoListItem';
import classNames from 'classnames';

class TodoList extends Component {
  state = {
    todos: [],
    inputValue: '',
    filter: 'All'
  };
  id = 0;

  setFilter = filterName => {
    this.setState();
    this.setState({
      filter: filterName
    });
  };

  add = taskName => {
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          { name: taskName, done: false, id: this.id++ }
        ]
      };
    });
  };

  toggle = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map((todo, i) => {
          if (todo.id === id) return { ...todo, done: !todo.done };
          else return todo;
        })
      };
    });
  };

  edit = (newName, id) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map((todo, i) => {
          if (todo.id === id) return { ...todo, name: newName };
          else return todo;
        })
      };
    });
  };

  delete = id => {
    this.setState(prevState => {
      return prevState.todos.filter(todo => todo.id !== id);
    });
  };

  getTodos = () => {
    switch (this.state.filter) {
      case 'All':
        return this.state.todos;
      case 'Dones':
        return this.state.todos.filter(t => t.done);
      case 'Un-Dones':
        return this.state.todos.filter(t => !t.done);
    }
  };

  handleAddTodoPress = () => {
    if (this.state.inputValue) {
      this.add(this.state.inputValue);
      this.setState({
        inputValue: ''
      });
    }
  };

  handleInputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Todo list</h2>
        <ul className={styles.tasks}>
          {this.getTodos().map((todo, index) => (
            <TodoListItem
              {...todo}
              key={todo.id}
              onToggle={this.toggle}
              onDelete={this.delete}
              onEdit={this.edit}
            />
          ))}
        </ul>
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          type="text"
        />
        <button onClick={this.handleAddTodoPress} className={styles.button}>
          Add Todo
        </button>
        <div>
          <p style={{ marginBottom: 0 }}>Filters</p>
          <button
            onClick={() => this.setFilter('All')}
            className={classNames(styles.button, {
              [styles.activeButton]: this.state.filter === 'All'
            })}>
            All
          </button>
          <button
            onClick={() => this.setFilter('Dones')}
            className={classNames(styles.button, {
              [styles.activeButton]: this.state.filter === 'Dones'
            })}>
            Dones
          </button>
          <button
            onClick={() => this.setFilter('Un-Dones')}
            className={classNames(styles.button, {
              [styles.activeButton]: this.state.filter === 'Un-Dones'
            })}>
            Un-Dones
          </button>
        </div>
      </div>
    );
  }
}

export default TodoList;
