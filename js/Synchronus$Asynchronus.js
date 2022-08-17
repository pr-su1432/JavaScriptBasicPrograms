// // Asynchronous Code in JavaScript.
 //console.log("one");
 //setTimeout(() => {
     //console.log("two")
 //}, 3000);
 //console.log("three");


// synchronous Code in JavaScript.
function abc()
{
   console.log('abc');
}
function xyz()
{
   abc()
   console.log('xyz');
}
xyz();