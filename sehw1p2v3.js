#!/usr/bin/env node
var start = new Date();
var fs = require('fs');
var outfile = "sehw1p2v3.txt";
var results = new Array();

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

for (i = 2,primeCount = 0; primeCount<100; i++)
{
	if (isPrime(i))
	{
		primeCount++;			
		results.push(i);
	}
}

var out = results.join(",");

fs.writeFileSync(outfile, out);
var end = new Date() - start;
console.log("Script took " + end + " sec.");