import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  const handleClickInTodo = (todo) => {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  };

  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleClickInTodo(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
