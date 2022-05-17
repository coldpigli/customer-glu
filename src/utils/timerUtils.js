const getFormattedTimeString = (timeInSeconds) => {
    let minutes = String(Math.floor(timeInSeconds / 60));
    let seconds = String(timeInSeconds % 60);
    if (minutes.length < 2) minutes = "0" + minutes;
    if (seconds.length < 2) seconds = "0" + seconds;
    return minutes + ":" + seconds;
  };

export default getFormattedTimeString;