//1. AsyncAwait-----------------------------------
 function resolveAfter3Seconds() {
     return new Promise(resolve => {
       setTimeout(() => {
         resolve('resolved');
       }, 3000);
     });
   }
   async function asyncCall() {
     let abc = 3;
     console.log('calling');
     const result = await resolveAfter3Seconds();
     const FinalResult =result + abc;
     console.log("after resolved", FinalResult);
   }
   asyncCall();


//2 Object.keys()---------------------------
 var obj = { foo: "bar", baz: 56 };
 console.log(Object.keys(obj));



//3. Object.values()--------------------------
 var obj = { foo: "bar", baz: 56 };
 console.log(Object.values(obj));



//4. Object.entries()--------------------------
   const obj1 = {a: 1, b: 2, c: 3}
   for(let [key,value] of Object.entries(obj1)){
       console.log(`key: ${key} value:${value}`)
   }



//5. String padding------------------------------
String.padStart(targetLength,[padString])
String.padEnd([targetLength,padString])
 console.log('0.0'.padStart(5,'*'))
 console.log('0.0'.padStart(40))
 console.log('0.0'.padEnd(5,'*')) 
 console.log('0.0'.padEnd(20,'*'))
 


//6.  Object.getOwnPropertyDescriptors()-----------
/*const obj = {
    foo: 123,
    get bar() { return 'abc' }
  };
console.log(Object.getOwnPropertyDescriptors(obj))*/

