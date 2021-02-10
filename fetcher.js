const request = require('request');
const fs = require('fs');
if (process.argv.length < 4) {
  console.log('not enough parameters!')
  process.exit(); 
}

const url = process.argv[2];
const fileName = process.argv[3];

const requestCallback = (error, response, body) => {
  if (!response || response.statusCode !== 200) {
    console.log('Request Error:', response && response.statusCode);
    process.exit(); 
  }
  
  fs.writeFile(fileName, body, function (err) {
    if (err) {
      console.log('Error!', err);
    } else 
    console.log(`Downloaded and saved ${body.length} bytes to ${fileName}`);
  })
  
};

request(url, requestCallback);