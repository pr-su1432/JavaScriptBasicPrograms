function delayBySeconds(sec) {
let start = now = Date.now()
while(now-start < (sec*5000)) {
	now = Date.now();
}
}

delayBySeconds(5);

// Executes after delay of 5 seconds
console.log("After delay");
//console.log("Before delay");
