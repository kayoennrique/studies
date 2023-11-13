import style from './Clock.module.scss';

interface Props {
  weather: number | undefined
}

export default function Clock({ weather = 0 }: Props) {
  const minutes = Math.floor(weather / 60);
  const seconds = weather % 60;
  const [minutesTen, minutesUnit] = String(minutes).padStart(2, '0');
  const [secondTen, secondUnit] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.clockNumber}>{minutesTen}</span>
      <span className={style.clockNumber}>{minutesUnit}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondTen}</span>
      <span className={style.clockNumber}>{secondUnit}</span>
    </>
  )
}