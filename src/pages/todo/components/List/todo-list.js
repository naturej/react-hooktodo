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

  return (
    <>
      {todoList.map((todo) => (
        <OneTodo todo={todo} updateTodo={updateTodo} />
      ))}
    </>
  );
};
export default TodoList;
