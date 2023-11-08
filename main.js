const dotenv = require('dotenv');
const fs = require('fs');
const { create } = require('./message');

dotenv.config();

const name = process.env.NAME;
const number = process.env.NUMBER;

const result = create(name, number);

fs.writeFile('result.txt', result, (err) => {
  if (err) throw err;
  console.log('result.txtにファイルを書き込みました。');
});