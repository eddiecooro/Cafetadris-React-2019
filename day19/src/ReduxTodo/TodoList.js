import React, { Component } from 'react';
import styles from './TodoList.module.css';
import TodoListItem from './TodoListItem';
import classNames from 'classnames';
// import connect from '../connect';
import { connect } from 'react-redux';
import {
  addTodo,
  setFilter,
  editTodo,
  removeTodo,
  toggleTodo,
  undo
} from '../redux/actionCreators/todoActions';
import { getFilteredTodos, getHistory } from '../redux/selectors/todoSelectors';

class TodoList extends Component {
  state = {
    inputValue: '',
    filter: 'All'
  };

  setFilter = filterName => {
    this.props.setFilter(filterName);
  };

  getTodos = () => {};

  handleAddTodoPress = () => {
    if (this.state.inputValue) {
      this.props.addTodo(this.state.inputValue);
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
      <div style={{ width: '40%', margin: '20px auto' }}>
        <h2>Todo list</h2>
        <button
          disabled={!this.props.isUndoable}
          onClick={this.props.undo}
          className={styles.button}>
          Undo
        </button>
        <ul className={styles.tasks}>
          {this.props.todos.map((todo, index) => (
            <TodoListItem
              {...todo}
              key={todo.id}
              // onToggle={() => this.toggle(todo.id)}
              onToggle={() => this.props.toggleTodo(todo.id)}
              // onDelete={() => this.delete(todo.id)}
              onDelete={() => this.props.deleteTodo(todo.id)}
              // onEdit={newName => this.edit(newName, todo.id)}
              onEdit={name => this.props.editTodo(todo.id, name)}
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

let mapStateToProps = state => {
  console.log(getHistory(state));
  console.log(!!getHistory(state).length);
  return {
    todos: getFilteredTodos(state),
    isUndoable: !!getHistory(state).length
  };
};

let mapDispatchToProps = dispatch => {
  return {
    toggleTodo: todoId => dispatch(toggleTodo(todoId)),
    deleteTodo: todoId => dispatch(removeTodo(todoId)),
    editTodo: (todoId, name) => dispatch(editTodo(todoId, name)),
    addTodo: name => dispatch(addTodo(name)),
    setFilter: filterName => dispatch(setFilter(filterName)),
    undo: () => dispatch(undo())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

// export default class TodoListContainer extends Component {
//   render() {
//     return (
//       <TodoList
//         todos={[]}
//         addTodo={() => {}}
//         editTodo={() => {}}
//         deleteTodo={() => {}}
//       />
//     );
//   }
// }
