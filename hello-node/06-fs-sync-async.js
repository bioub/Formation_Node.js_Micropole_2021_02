const path = require('path');
const fs = require('fs');

const srcPath = path.resolve(__dirname, 'source.txt');
const destPath = path.resolve(__dirname, 'destination.txt');

// synchrone
// const buffer = fs.readFileSync(srcPath);
// console.log(buffer.toString('utf8'));
try {
  const str = fs.readFileSync(srcPath, { encoding: 'utf8' });
  fs.writeFileSync(destPath, str.toUpperCase());
  console.log('COPY DONE');
} catch (err) {
  console.log(err);
}

// asynchrone basée sur des callbacks Node.js
// Callback Hell | Pyramid of doom
fs.readFile(srcPath, { encoding: 'utf8' }, (err, str) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(destPath, str.toUpperCase(), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('COPY DONE');
      }
    });
  }
});

// asynchrone basée sur des promesses
fs.promises.readFile(srcPath, { encoding: 'utf8' })
  .then((str) => fs.promises.writeFile(destPath, str.toUpperCase()))
  .then(() => console.log('COPY DONE'))
  .catch((err) => console.log(err));

// async / await (2017+)
async function copyUpper() {
  try {
    const str = await fs.promises.readFile(srcPath, { encoding: 'utf8' });
    await fs.promises.writeFile(destPath, str.toUpperCase());
    console.log('COPY DONE');
  } catch (err) {
    console.log(err);
  }
}

copyUpper();
console.log('FIN');
