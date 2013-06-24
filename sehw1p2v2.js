#!/usr/bin/env node
var start = new Date();
var fs = require('fs');
var outfile = "sehw1p2.txt";
var out = "2";

function isPrime(n) 
{
	var isP = true;
	for (var j = 2; j < n; j++)
	{
		if (n % j == 0)
		{
			isP = false;
			break;
		}
	}
 
	return isP;
}

for (var i = 2; i < 500; i++)
{
	if (isPrime(i))
	{
		out += "," + i;
	}
}							

fs.writeFileSync(outfile, out);
var end = new Date() - start;
console.log("Script took " + end + " sec.");

