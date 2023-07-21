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
// let a = +prompt("enter the first side value of reguler triangle");
// let b = +prompt("enter the first side value of reguler triangle");
// let c = +prompt("enter the first side value of reguler triangle");
// let s = (a+b+c)/2;
// let totalArea = s*(s-a)*(s-b)*(s-c);
// let squreOfTotal = Math.sqrt(totalArea);
// console.log(squreOfTotal);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end to find the area of reguler triangle




// start swap tow number using and without using temprory variable 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// swap using temprory variable 
// let a = +prompt("enter the first value for swaping");
// let b = +prompt("enter the second value for swaping");
// console.log(`the first value is: ${a}, the second value is: ${b}`)
// let temp ; 
// temp = a ;
// a = b;
// b = temp;
// console.log(`after swaping \n the first value is: ${a}, the second value is: ${b}`)

// // swap using temprory variable 
// let c = +prompt("enter the first value of swapning without using temprory variable")
// let d = +prompt("enter the second value of swapning without using temprory variable")
//  c = c + d;
//  d = c - d;
//  c = c - d; 
//  console.log(`it is the first value of swaping without using variable> ${c}, it is the second value of swaping withour using variable> ${d}`)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
 // end swap tow number using and without using temprory variable 





//  start convert kilometers to miles 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// function convert(){
//     let kms = document.getElementById("data").value;    
//     const foactor = 0.621371
//     let miles = kms * foactor
//    document.getElementById("result").innerText = miles + "miles"
// };
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
//  end convert kilometers to miles 





// start convert celsius to fahrenheit 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// function fahConvert(){
//     let cels = document.getElementById("fahData").value;
//     let totalFah = cels * 1.8 + 32;
//     document.getElementById("farh_result").innerText = totalFah + "Fahrenheit"
// };
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end convert celsius to fahrenheit 





// start check number is postive negative or zero
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
    function check(){
        let value = document.getElementById("CheckData").value;
        
        let response = Math.sign(value);
        // alert(response)
        document.getElementById("result").innerText = response;  
    };
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end check number is postive negative or zero
