import React, {useEffect} from "react";
import css from "./style.module.css";

var idCounter = 0;

const Input = ({ input, setInput, todos, setTodos, editTodo, setEditTodo, darkMode }) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => todo.id === id ? {title, id, completed} : todo);
        setTodos(newTodo);
        setEditTodo("");
    }

    useEffect(() => {
        if(editTodo) {
            setInput(editTodo.title);
        }
        else {
            setInput("");
        }
    }, [setInput, editTodo]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo) {
            idCounter++;
            setTodos([...todos, {id: input+idCounter, title: input, completed: false}]);
            setInput("");
        }
        else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    };

    return (
        <form className={css.FormContainer} onSubmit={onFormSubmit}>
            <input type="text" placeholder="Хийх зүйлсээ бичнэ үү :)" className={`${css.TaskInput} ${darkMode ? css.darkMode : ""}`} value={input} required onChange={onInputChange}/>
            <button className={`${css.ButtonAdd} ${editTodo ? css.EditButton : ""} ${darkMode ? css.darkMode : ""}`} type="submit">{editTodo ? "Засах" : "Нэмэх"}</button>
        </form>
    )
}

export default Input;