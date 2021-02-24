// require('readline'); // binaire de node
// require('chalk'); // node_modules (open-source)
const myMath = require('./my-math'); // fichier local (commence toujours par ./ ou ../)
// myMath === exports du fichier my-maths.

const hello1 = require('./hello').hello;
const { hello: hello2 } = require('./hello');
const { hello } = require('./hello');

console.log(myMath.sum(1, 2));
console.log(hello1('Romain'));
console.log(hello2('Romain'));
console.log(hello('Romain'));

const pileOuFace = require('./pile-ou-face');

console.log(pileOuFace());
