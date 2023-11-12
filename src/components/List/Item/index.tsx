import style from '../List.module.scss';

export default function Item({ task, weather }: { task: string, weather: string }) {
    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{weather}</span>
        </li>
    )
}