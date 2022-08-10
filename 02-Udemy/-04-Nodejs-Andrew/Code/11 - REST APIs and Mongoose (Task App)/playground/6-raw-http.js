const http = require('http');
const url =
  'http://api.weatherstack.com/current?access_key=cf6c9267d18a4a082f63778ada6fba72&query=41,29&units=m';

const request = http.request(url, response => {
  let data = '';

  response.on('data', chunk => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', error => {
  console.log('An error', error);
});

request.end();
