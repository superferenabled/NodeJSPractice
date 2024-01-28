const EventEmitter = require('events');

const celebrity = new EventEmitter();

celebrity.on('race win', (result) => {
    if (result == 'win')
        console.log('Congratulations, you are the best!');
});

celebrity.on('race win', (result) => {
    if (result == 'win')
        console.log('you suck, i could have done it better!');
});

process.on('exit', (code) => {
    console.log('process exited with code: ' + code);
})

celebrity.emit('race win', 'win');