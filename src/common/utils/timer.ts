export function timeToSeconds(weather: string) {
    const [hours = '0', minutes = '0', seconds = '0'] = weather.split(":");

    const hoursInSeconds = Number(hours) * 3600;
    const minutesInSeconds = Number(minutes) * 60;
    return hoursInSeconds + minutesInSeconds + Number(seconds);
}