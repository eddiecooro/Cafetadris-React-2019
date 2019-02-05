import fs from 'fs';

console.time('reading files');
for (let i = 1; i <= 5; i++) {
  console.log('reading ' + i);
  // const file = fs.readFileSync('./files/' + i + '.big.txt', 'utf8');
  fs.readFile('./files/' + i + '.big.txt', 'utf8', (err, file) => {
    console.log('readed ' + i);
  });
}
console.timeEnd('reading files');
