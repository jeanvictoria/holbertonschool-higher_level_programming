#!/usr/bin/node
const argms = process.argv[2];
if (argms.length <= 1) {
	console.log(0);
} else { 
	const nums = argms.map(value => parseInt(value));
	const max = Math.max(...nums);
	const fill = [];
	for (let i = 0; i < nums.length; i++) { 
		if (nums[i] !== max) {
			fill.push(nums[i]);
		}
	}
	const secondMax = Math.max(...fill);
	console.log(secondMax);
}
