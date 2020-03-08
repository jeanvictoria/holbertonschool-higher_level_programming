#!/usr/bin/node
const arguments1 = process.argv[2];

if (Math.floor(arguments1)) {
  console.log(`My number: ${Math.floor(arguments1)}`);
} else {
  console.log('Not a number');
}
