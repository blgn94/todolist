import React from "react";
import css from "./style.module.css";

const TodosList = ({todos, setTodos, setEditTodo}) => {

    const whenComplete = (todo) => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {...item, completed: !item.completed}
            }
            return item;
        }))
    }

    const whenEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const whenDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            {todos.map((todo) => (
                <li className={css.ListItem} key={todo.id}>
                    <input type="text" value={todo.title} className={`${css.List} ${todo.completed ? css.Complete : ""}`} onChange={(event) => event.preventDefault()} disabled/>
                    <div className={css.ButtonsContainer}>
                        <button className={`${css.ButtonComplete} ${todo.completed ? css.GreenButton : ""}`} onClick={() => whenComplete(todo)}>
                            <i className="fa-regular fa-circle-check"></i>
                        </button>
                        <button className={`${css.ButtonEdit} ${css.TaskButton}`} onClick={() => whenEdit(todo)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button className={`${css.ButtonDelete} ${css.TaskButton}`} onClick={() => whenDelete(todo)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default TodosList;
