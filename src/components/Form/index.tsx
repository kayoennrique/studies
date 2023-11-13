import React, { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss';
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from 'uuid';

interface Props{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({setTasks}: Props ) {
  const [task, setTask] = useState("");
  const [weather, setWeather] = useState("00:00");
  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks(oldTasks =>
      [
        ...oldTasks,
        {
          task,
          weather,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]
    )
    setTask("");
    setWeather("00:00");
  }

  return (
    <form
      className={style.taskNew}
      onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor={style.task}>
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={event => setTask(event.target.value)}
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor={style.weather}>
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="weather"
          value={weather}
          onChange={event => setWeather(event.target.value) }
          id="weather"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">
        Adicionar
      </Button>
    </form>
  )
}

export default Form;