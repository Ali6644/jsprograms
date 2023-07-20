// start tow numbers  add program static or dynamicly
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// static add num program 
// let nmuOne = 2;
// let numTow = 5;
// function addNumStaticly(){
//     return nmuOne + numTow;
// };
// let resultAddNumStatic = addNumStaticly();
// console.log(resultAddNumStatic);

// // dynamic add num program 

// let numberOne = +prompt("put first a number which you want to add");
// let numberTow = +prompt("put second a number which you want to add");
// function addNumdynamicly(){
//     return numberOne + numberTow;
// };
// let resultAddNumDynamicly = addNumdynamicly();
// console.log(resultAddNumDynamicly)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end tow numbers  add program static or dynamicly





// start get squre root of a number 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// let a = +prompt("enter a number to get sqaure root of your puted number")
// let b = Math.sqrt(a)
// let c = Math.round(b)
// console.log(c)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end get squre root of a number 





// start to find the value of right angled triangle  
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// let base = prompt("enter the value of base of the right riangle");
// let higeht = prompt("enter the value of highet of the right riangle");
// function triangleValue(){
//     return base*higeht/2;
// };
// let resultTriangleValue = triangleValue();
// console.log(resultTriangleValue);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end to find the value of right angled triangle  





// start to find the area of reguler triangle
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
let a = +prompt("enter the first side value of reguler triangle");
let b = +prompt("enter the first side value of reguler triangle");
let c = +prompt("enter the first side value of reguler triangle");
let s = (a+b+c)/2;
let totalArea = s*(s-a)*(s-b)*(s-c);
let squreOfTotal = Math.sqrt(totalArea);
console.log(squreOfTotal);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end to find the area of reguler triangle

