#!/usr/bin/env node
var start = new Date();
var fs = require('fs');
var outfile = "sehw1p2.txt";

var out = "2";

for (var i = 2; i < 500; i++)
{
	for (var j = 2; j < i; j++)
	{
		if (i % j == 0)
		{
			var prime = 'no';
			break;
		}
		else
			var prime = 'yes';
	}
	if (prime == 'yes')
	{
		out += "," + i;
	}
}							

fs.writeFileSync(outfile, out);
var end = new Date() - start;
console.log("Script took " + end + " sec.");

