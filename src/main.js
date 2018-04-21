const fs = require('fs');
const parseBitmap = require('./parseBitmap');
const transform = require('./transform');

// const parseBitmap = require('./lib/parse-bitmap');

// import { fstat } from "fs";


console.log('SUP');

fs.readFile(`${__dirname}/assets/house.bmp`, (error, data) => {
  if (error) {
    throw error;
  } else {
    console.log(data);
    // parseBitmap.parse(error, data);
    // transform.color(data);

    const foo = Buffer.from(data);
    console.log('foo', foo);

    transform.colorTable(foo);
  }
});


// console.log('whats argv: ', process.argv);// returned array at 2--etc is useful!
