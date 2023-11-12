import React from "react";
import Button from "../Button";
import style from './Form.module.scss';

class Form extends React.Component {
    render() {
        return (
            <form className={style.taskNew}>
                <div className={style.inputContainer}>
                    <label htmlFor={style.task}>
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
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
                        id="weather"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button>
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form;