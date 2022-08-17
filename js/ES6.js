//features of ES6 

//1. Default Function----------------------
 /*const test = (a='a',b='b',c='c')=>{
     return a+b+c
 }
 
 console.log(test('A','B','C')) 
 console.log(test('A','B'))     
 console.log(test('A')) */        



// // 2. Template string-------------------
  /*let firstName = "Prasanna";
  let lastName = "Kommuri";
 console.log(`My name is ${firstName} ${lastName}.`);*/



//-3. Spread Operator---------------------
 /*var arr1 = [0, 3, 7];
 var arr2 = [9, 10, 11];
 var arr3 = [...arr1, ...arr2];// Append all elements in arr2 after arr1 and return
 //Equate to
 var arr4 = arr1.concat(arr2);
 console.log(arr4)*/



//4. Arrow function--------------------
/* const func = (a, b) => a + b;
 func(6, 7); 
 console.log(func(6, 7) );*/


//5. Destructuring----------------------
 let arr = ["Prasanna", "Kommuri"]
 let [firstName, surname] = arr;
 console.log("FirstName: "+firstName);  
 console.log("Surname: "+surname); 


//possible to unpack values from arrys

/*let arr = [20,40,60,79,90];

let [a,b,...rest] = arr
console.log(rest);*/
 


