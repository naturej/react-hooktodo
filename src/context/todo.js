const { createContext, useState, useContext } = require("react");

const initialValue = [
  {
    id: 1,
    title: "example1",
    content: "content1",
    state: false,
  },
  {
    id: 2,
    title: "example2",
    content: "content2",
    state: false,
  },
  {
    id: 3,
    title: "example3",
    content: "content3",
    state: false,
  },
];

export const useTodoStore = () => useContext(TodoStore);

const TodoStore = createContext();
const TodoStoreProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialValue);
  return (
    <TodoStore.Provider value={[todoList, setTodoList]}>
      {/* */}
      {children}
    </TodoStore.Provider>
  );
};

export default TodoStoreProvider;
