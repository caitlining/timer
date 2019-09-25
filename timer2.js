const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  }
  key = Number(key);
  if (Number.isFinite(key) && key >= 0) {
    console.log("setting timer for " + key + (key === 1? " second." : " seconds."));
    setTimeout(() => { process.stdout.write('\x07'); }, key * 1000);
  }
});
