import React from 'react';
import styles from './TodoList.module.css';
import classNames from 'classnames';

class TodoListItem extends React.Component {
  state = {
    editing: false,
    inputValue: ''
  };

  handleEditPressed = () => {
    this.setState({
      inputValue: this.props.name,
      editing: true
    });
  };

  handleSave = () => {
    this.props.onEdit(this.state.inputValue);
    this.setState({
      editing: false,
      inputValue: ''
    });
  };

  handleCancel = () => {
    this.setState({
      editing: false,
      inputValue: ''
    });
  };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  componentWillUnmount() {
    console.log('Component unmounted', this.props);
  }

  render() {
    console.log('Component rendered', this.props);
    return (
      <li>
        {this.state.editing ? (
          <>
            <input
              value={this.state.inputValue}
              onChange={this.handleChange}
            />
            <button
              onClick={this.handleSave}
              className={styles.button}>
              Save
            </button>
            <button
              onClick={this.handleCancel}
              className={styles.button}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <span
              style={{
                textDecoration: this.props.done
                  ? 'line-through'
                  : 'none'
              }}>
              {this.props.name}
            </span>
            <button
              onClick={this.props.onToggle}
              className={classNames(
                styles.button,
                styles.itemButton
              )}>
              {this.props.done ? 'Un-Done' : 'Done'}
            </button>
            <button
              onClick={this.handleEditPressed}
              className={classNames(
                styles.button,
                styles.itemButton
              )}>
              Edit
            </button>
            <button
              onClick={this.props.onDelete}
              className={classNames(
                styles.button,
                styles.itemButton
              )}>
              Delete
            </button>
          </>
        )}
      </li>
    );
  }
}

export default TodoListItem;
