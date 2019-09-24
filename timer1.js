let alarmTimeArray = process.argv.slice(2);

const alarmFunc = function (timesArr) {

  if (timesArr.length === 0) {
    return;
  }

  for (const time of timesArr) {
    let alarmTime = Number(time);
    if (Number.isFinite(alarmTime) && alarmTime >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, alarmTime);
    }
  }
};

alarmFunc(alarmTimeArray);

