import { useState } from "react";
import OneTodo from "./one-todo";

const TodoList = ({ todoList, setTodoList }) => {
  // 수정
  const updateTodo = (id, content) => {
    const _todoList = [...todoList];
    const todo = _todoList.find((todo) => todo.id === id);
    todo.content = content;
    setTodoList(_todoList);
  };

  const deleteTodo = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const _todoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(_todoList);
    }
  };

  return (
    <>
      {todoList.map((todo) => (
        <OneTodo todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};
export default TodoList;
