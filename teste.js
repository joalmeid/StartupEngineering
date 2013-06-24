var out = "";
var results = [];
results.push("value1");
results.push("value2");
results.push("value3");
for (var i = 0; i < results.length; i++) {
	out += "," + results[i]
}
console.log(results.join(","));