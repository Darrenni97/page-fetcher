const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const website = args[0]
const file = args[1];

request(website, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  const stats = fs.statSync(`${file}`);
  const fileSizeInBytes = stats.size;

  fs.writeFile(`${file}`, body, function (err) {
    if (err) throw err;
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${file}`);
  });


});