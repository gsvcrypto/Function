'use strict';

const generateKey = (length, possible) => {
  const len = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * len);
    key += possible[index];
  }
  return key;
};

module.exports = { generateKey };
