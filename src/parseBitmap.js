'use strict';

const parseBitmap = module.exports = {};

parseBitmap.parse = (error, buffer) => {
  if (error) {
    throw error;
  }
  const parsedBitmap = {};
  const FILE_SIZE_OFFSET = 2;
  const HEIGHT_OFFSET = 22;
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_SIZE = 1024;

  parsedBitmap.type = buffer.toString('utf-8', 0, 2);
  parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
  parsedBitmap.colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE);
  console.log(parsedBitmap);
  return parsedBitmap;
};


// const buf = Buffer.allocUnsafe(26);

// for (let i = 0; i < 26; i++) {
//   // 97 is the decimal ASCII value for 'a'
//   buf[i] = i + 97;
// }

// buf.copy(buf, 0, 4, 10);

// console.log(buf.toString());