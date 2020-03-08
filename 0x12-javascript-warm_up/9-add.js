#!/usr/bin/node
const a = process.argv[2];
const b = process.argv[3];
function add (a, b) {
  const add = parseInt(a) + parseInt(b);
  return add;
}
console.log(add(a, b));
