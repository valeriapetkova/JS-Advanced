function timeToWalk(steps, footprint, speed) {
    let distanceInMeters = steps * footprint;
    let speedMetersSec = speed / 3.6;
    let time = distanceInMeters / speedMetersSec;

    let res = Math.floor(distanceInMeters / 500);

    let timeInMin = Math.floor(time / 60);
    let timeInSec = Number((time - (timeInMin * 60)).toFixed(0));
    let timeInHours = Math.floor(time / 3600);

    timeInMin += res;
    timeInHours += Math.floor(timeInMin / 60);
    timeInMin = timeInMin % 60;

    let finalHours = timeInHours < 10 ? `0${timeInHours}` : `${timeInHours}`;
    let finalMinutes = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let finalSeconds = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

    console.log(`${finalHours}:${finalMinutes}:${finalSeconds}`);
}