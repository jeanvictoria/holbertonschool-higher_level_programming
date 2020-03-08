#!/usr/bin/node
if (process.argv[2] === undefined) {
  console.log('Missing size');
} else {
  const size = process.argv[2];

  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}
