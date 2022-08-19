//ArrayOperations-----------
//var arrayOperations;
//let fruits = ["Apple", "Banana"];
//console.log(fruits.length);

//Access an array iteam using the index position-----------
//let first = fruits[0];
//console.log(first); //Apple

//let last = fruits[fruits.length -1];
//console.log(last); //Banana

//Add an element at the end of a array---------------------------------
//fruits.push("Orange");
//console.log("added Orange", fruits); //Apple,Banana,Orange

//Remove an element from the end of an array------------------------------------
//let last = fruits.pop(); //remove orange from the end
//console.log("removed Orange",fruits); //Apple,Banana

//remove an element from the beginning of an array-----------------------------------
//let first = fruits.shift(); //remove orange from the front
//console.log("removed Orange",fruits); //Banana

//Add an item to the beginning of an array-----------------------------------
//let newlength = fruits.unshift("Strawberry"); //add to the front
//console.log("added", fruits); //strawberry,Banana

//Find the index of an item in the array-----------------------------------
//let pos = fruits.indexOf("Banana");
//console.log("index", fruits);

//Splice---------------------------------------------------------------
//const fruits = ["Banana", "Orange","Apple", "Mango"];
//fruits.splice(2, 1, "Kiwi");//Add kivi to array
//console.log(fruits);

//Slice------------------------------------------------------------
//let text = "hello hi";
//let AfterSplice = text.slice(0, 5);
//console.log(AfterSplice);

//Split-----------------------------------------------------------
let text = "hello hi";
let afterSlice = text.split("o");
console.log(afterSlice[0]);

//SpreadOperator--------------------------------------------------------------------
//const fruits = ["Banana", "Orange"];
//const fruits1 = ["Apple"];
//const fruits2 = ["Mango"];
//const newArray = fruits.concat(fruits1, fruits2);
//const newArray = [...fruits,...fruits1,...fruits2]
//console.log(newArray);

//aftercov---------------------------------------------
//const fruits = ["Banana", "Orange"];
//let afterCov = fruits.join("#");
//let afterCov = fruits.toString();
//console.log(afterCov);

//Map----------------------------------------------------------------------
//const flowers = ["rose", "lilly","lotus"];
//let Output = flowers.map((data)=> data.toUpperCase());
//console.log(Output);

//Mapfunction using numbers------------------------------------------------------------
//const numbers = [45, 5, 9, 36, 16, 25, 2];
//let Output = numbers.map((no)=> no * 2);
//console.log(Output);

//let filterOutput = numbers.filter((no)=> no < 3);
//console.log(filterOutput);

//let Output = numbers.reduce((a, v)=>{
    //return a + v;
//},100);
//console.log(Output);
















