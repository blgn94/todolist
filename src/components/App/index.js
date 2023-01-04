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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
      <div className={css.Container}>
        <div className={css.TodoBox}>
            <Title />
            <Input input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
            <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
  );
}

export default App;
