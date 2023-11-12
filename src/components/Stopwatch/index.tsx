import style from './Stopwatch.module.scss';
import Clock from "./Clock";
import Button from "../Button";

export default function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro:</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}