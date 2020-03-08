#!/usr/bin/node
const argumentsx = process.argv[2];
function factorial (n) {
  if (!n) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
console.log(factorial(argumentsx));
