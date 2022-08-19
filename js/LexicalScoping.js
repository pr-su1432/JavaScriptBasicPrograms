function init() {
    var name = 'Prasanna'; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

//Scoping with var-----------------------------------
if (Math.random() > 0.5) {
    var x = 1;
  } else {
    var x = 2;
  }
  console.log(x);

//Scoping with const--------------------------------------
if (Math.random() > 0.5) {
    const x = 1;
  } else {
    const x = 2;
  }
  console.log(x); // ReferenceError: x is not defined