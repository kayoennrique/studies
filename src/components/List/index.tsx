import React from "react";
import style from './List.module.scss';

function List() {
    const tasks = [{
        task: 'React',
        weather: '02:00:00'
    }, {
        task: 'Javascript',
        weather: '01:00:00'
    }, {
        task: "TypeScript",
        weather:"03:00:00"
    }]
    return (
        <aside className={style.listTasks}>
            <h2> Estudos do dia : </h2>
            <ul>
                {tasks.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3> {item.task} </h3>
                        <span> {item.weather} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;