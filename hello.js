//const process = require('process');

let mission = process.argv[2];

if (mission == `learn`) {
    console.log(`Time to write some Node code!`);
} else {
    console.log(`is ${mission} more fun?`);
}