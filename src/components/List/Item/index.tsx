import { ITask } from '../../../types/task';
import style from './Item.module.scss';

interface Props extends ITask {
    selectTask: (taskSelected: ITask) => void
}

export default function Item(
    {
        task,
        weather,
        selected,
        completed,
        id,
        selectTask }: Props) {

    return (
        <li
            className=
            {`
                ${style.item}
                ${selected ? style.itemSelected : ''}
                ${completed ? style.itemCompleted : ''}
            `}
            onClick={() => !completed && selectTask(
                {
                    task,
                    weather,
                    selected,
                    completed,
                    id
                }
            )}
        >
            <h3>{task}</h3>
            <span>{weather}</span>
            {completed && 
            <span className={style.concluded} 
            aria-label="task completed"></span>}
        </li>
    )
}