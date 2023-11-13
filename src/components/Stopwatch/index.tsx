import style from './Stopwatch.module.scss';
import Clock from "./Clock";
import Button from "../Button";
import { ITask } from '../../types/task';
import { useState, useEffect } from 'react';
import { timeToSeconds } from '../../common/utils/timer';

interface Props {
  selected: ITask | undefined,
  finishTask: () => void
}

export default function Stopwatch({ selected, finishTask }: Props) {
  const [weather, setWeather] = useState<number>();

  useEffect(() => {
    if (selected?.weather) {
      setWeather(timeToSeconds((selected.weather)));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setWeather(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000)
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro:</p>
      <div className={style.clockWrapper}>
        <Clock weather={weather} />
      </div>
      <Button onClick={() => regressive(weather)}>
        Começar!
      </Button>
    </div>
  )
}