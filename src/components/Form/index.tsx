import React from "react";
import Button from "../Button";

class Form extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="task">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="O que você quer estudar?"
                        required
                    />
                    <label htmlFor="weather">
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
                <div>
                    <Button />
                </div>
            </form>
        )
    }
}

export default Form;