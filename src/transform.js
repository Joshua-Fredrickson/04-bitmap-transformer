'use strict';

const transform = module.exports = {};

// transform.color = (obj) => {
//   for (let i = 0; i < obj.colorTable.length; i++) {
//     obj.colorTable[i] = 0;
//   }
//   return obj;
// };
// transform.color = (duration) => {
//   for (let i = 0; i < duration.length; i++) {
//     duration.colorTable[i] = 0;
//   }
//   return duration;
// };

const parsedBitmap = {};
const FILE_SIZE_OFFSET = 2;
const HEIGHT_OFFSET = 22;
const COLOR_TABLE_OFFSET = 54;
const COLOR_TABLE_SIZE = 1024;

transform.type = buffer.toString('utf-8', 0, 2);
transform.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
transform.height = buffer.readInt32LE(HEIGHT_OFFSET);

transform.colorTable = (buffer) => {
  const colorBuff = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE);
  for (let i = 0; i <= colorBuff.length; i++) {
    colorBuff[i] = 0;
  };
  return buffer;
};
