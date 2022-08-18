//1.  asynchronous iterator------------------------------
  //(Asynchronous iteration allow us to iterate over data that comes asynchronously, on-demand. 
  //...Like, for instance, when we download something chunk-by-chunk over a network. And asynchronous generators make it even more convenient.)

// function asyncIterator() {
//     const array = [1, 2];
//     return {
//       next: function() {
//         if (array.length) {
//           return Promise.resolve({
//             value: array.shift(),
//             done: false
//           });
//         } else {
//           return Promise.resolve({
//             done: true
//           });
//         }
//       }
//     };
//   }
  
//   var iterator = asyncIterator();
  
//   (async function() {
//       await iterator.next().then(console.log); // { value: 1, done: false }
//       await iterator.next().then(console.log); // { value: 2, done: false }
//       await iterator.next().then(console.log); // { done: true }
//   })();






//2. template string of non escape sequence--------------------------------------
//Tags allow you to parse Template Strings with functions. The first parameter of the tag function contains an array of string values. The rest of the parameters are expression dependent. Finally, your function can return the processed string (or it can return something completely different).

// function foo(str) {
//     return str[0].toUpperCase();
// }
// console.log(foo`justjavac`); // Output JUSTJAVAC
// console.log(foo`Xyz`); // Output XYZ




//3.Regular Expression Name the capture group--------------------------------------

// let regx = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
// let result = regx.exec('2020-12-02');

// result.groups.year === '2020';
// result.groups.month === '12';
// result.groups.day === '02';

// result[0] === '2020-12-02';
// result[1] === '2020';
// result[2] === '12';
// result[3] === '02';

// console.log(result);



// //4. object expansion operator----------------------------------------

// let a = [1,2,3];
// let b = [0, ...a, 4]; // [0,1,2,3,4]
 
// let obj = { a: 1, b: 2 };
// let obj2 = { ...obj, c: 3 }; // { a:1, b:2, c:3 }
// let obj3 = { ...obj, a: 3 }; // { a:3, b:2 }
// let object = {
//   a: '01', b: '02'
// };
// let newObject = {
//   c: '03',
//   ...object
// };
// console.log(newObject); //{c: "03", a: "01", b: "02"}


//5. Promise prototype finally-----------------------------------------
function testFinally() {
    return new Promise((resolve,reject) => resolve())
  }
  
  testFinally().then(() => console.debug("resolved")).finally(() => console.debug("finally"))