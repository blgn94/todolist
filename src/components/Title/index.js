import React from "react";
import css from "./style.module.css";

const Title = ({ darkMode }) => {
    return (
        <div className={`${css.Header} ${darkMode ? css.darkMode : ""}`}>
            <h1>Зорилтот хийх ажлын жагсаалт</h1>
        </div>
    )
}

export default Title;