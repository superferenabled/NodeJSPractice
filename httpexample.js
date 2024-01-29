const { get } = require('https');

get('https://www.google.com', (response) => {
    response.on('data', (chunk) => {
        console.log(`chunk: ${chunk}`);
    });
    response.on('end', () => {
        console.log('this shit is done');
    });
});