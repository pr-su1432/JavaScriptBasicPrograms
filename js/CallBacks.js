// function
function greet(name, callback) {
    console.log('Kommuri' + ' ' + name);
    callback();
}

// callback function
function Hello() {
    console.log('this is callback function');
}

//passing function as an argument;
greet('Arjun', Hello);

