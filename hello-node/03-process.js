// node 03-process.js build --prod
console.log(process.argv.slice(2)); // ['build', '--prod']

// cpu + memoire consommés par cette instance
console.log(process.cpuUsage());
console.log(process.memoryUsage());

// Current Working Dir (où je suis dans mon terminal)
console.log(process.cwd());

// variables d'environnement
console.log(process.env.PATH);

// killer le programme
// process.exit(0); // pas d'erreur
// process.exit(1); // avec un code d'erreur

// utilisateur et groupe qui a lancé cette instance
console.log(process.getuid());
console.log(process.getgid());


// depuis quand est lancé le process
console.log(process.hrtime());

console.log(process.platform); // darwin (macos)


// ecrit dans le terminal
process.stdout.write('Hello');
process.stdout.write('!!!\n');

// lire le clavier (combiner avec readline)
const readline = require('readline');

const rl = readline.createInterface(process.stdin);

rl.on('line', (line) => {
  console.log('Vous avez saisi : ' + line);
  rl.close(); // arrete d'écoute la ligne
});

console.log("Cette ligne s'affiche avant la saisie qui est asynchrone");
