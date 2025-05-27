import React, {useState, useEffect} from "react";
import Title from '../Title';
import Input from '../Input';
import TodosList from "../TodosList";
import css from './style.module.css';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
      <div className={`${css.Container} ${darkMode ? css.darkMode : ""}`}>
        <div className={css.TodoBox}>
            <button onClick={toggleDarkMode}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <Title darkMode={darkMode} />
            <Input darkMode={darkMode} input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
            <TodosList darkMode={darkMode} todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
  );
}

export default App;
