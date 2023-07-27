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
    // function check(){
    //     let value = document.getElementById("CheckData").value;
        
    //     // let response = Math.sign(value);
    //     // alert(response)
    //     if(value == 0 ){
    //     document.getElementById("result").innerText =`${value} it is zero`;  

    //     }else if(value > 0){
    //     document.getElementById("result").innerText =`${value} it is positive number`;  
            
    //     }else if(value < 0){
    //     document.getElementById("result").innerText =`${value } it is negative number`;  

    //     }else{
    //     document.getElementById("result").innerText =`${value } it is  NaN`;  

    //     } 
    // };
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end check number is postive negative or zero




// start make even or odd number confermation
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// let a = +prompt("enter a number to check even or odd")
// if(a%2 == 0){
//     document.getElementById("result").innerText = `${a} it is even number`
// }else{
//     document.getElementById("result").innerText = `${a} it is odd  number`
    
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end make even or odd number confermation





// start find a primery number 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// let number = +prompt("enter a number which you want to get know about promery or not")

// first metod 
// let a = +prompt("enter a numbef

    
    // second method
// if(number == 1){
//     console.log(`${number} is neither a primery or not composite number`)
// }else if (number <1 ){
//     console.log(`${number} is neither a primery or not composite number`)
    
// }else{
//     for(let i = 2 ; i <number; i++){
//         // let num = number%i
//             // console.log(num)
//         if(number%i == 0){
//         console.log(`${number} is not a primery number`)
//             break;
//         }else{
//         console.log(`${number} is  a primery number`)
            
//         }
//     }
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end find a primery number 


// start have to find largest number 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// function check(d,e,f){
//     if(d > e && d>f){
//         return console.log(`${a} is the largest number`)
//     }else if(e > d && e > f){
//         return console.log(`${b} is the largest number`)

//     }else if(f > d && f > e){
//         return console.log(`${c} is the largest number`)

//     }
    
// }
// let a = +prompt("enter a number to get find the largest number")
// let b = +prompt("enter the second number to get find  the largest number")
// let c = +prompt("enter the third number to get find  the largest number")

// let res = check(a,b,c)
// console.log(res)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end have to find largest number 




// start to find factorial of a random number 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// let a = +prompt("enter the number to get find a factorial")
// let fact = 1;
// if(a === 0){
//     console.log(`the factroial of ${a} is 1`)
// }else if( a < 0){
//     console.log(`the factorail fo negative number is not possible`)
// }else{
//     for(let i = 1; i<=a ; i++){
//         fact = fact*i; 
//     }
//     console.log(`${fact} this the factorial of your entered number`)

// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end to find factorial of a random number 





// start to find the factorial of a random number by recursion
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// let a = +prompt("enter the  number to get find a factorial of entered number")
// let fact = 1;
// // console.log(fact)

// function recur(n){
//     if(n>a){
//         return "complete";

//     }
//     let temp = fact 
//     fact = fact*n
//     console.log(temp + "X" + n + "=" + fact)
//     n++
//     recur(n)
// }
// let result = recur(1)

// console.log(result)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// start to find the factorial of a random number by recursion




// start to make a table from loop 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// let a = +prompt("enter a number to make a table")
// function table(number){
//     for(let i = 1 ; i <= 10 ; i++){
//         let multi= i * number
//         console.log(`${number} x ${i} = ${multi}`)
//     }
// }
// table(a)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end to make a table from loop 



 


// start make armstrong number 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// let a = +prompt("enter the number which you check armstrong or not");
// let temp = a;
// let noOffDigits = a.toString().length;
// alert(noOffDigits)
// let sum = 0;
// while(temp > 0){
    // console.log(temp)
    // let digit = temp%10;
    // console.log(digit)
    
    // sum += digit**noOffDigits;
    // console.log(sum)

    // temp = parseInt(temp/10)
    // console.log(temp)

// }
// if(sum == a){
//     document.write(`${a} is an armstrong number`)
// }else{
//     document.write(`${a} is not an armstrong number`)

// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end make armstrong number 




// start to check last digit is same or not 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// let a = +prompt("enter your first number to check its last digit same or not")
// let b = +prompt("enter your second number to check its last digit same or not")
// let c = +prompt("enter your third number to check its last digit same or not")

// let aDivide = a%10; 
// let bDivide = b%10;
// let cDivide = c %10;

// if(aDivide == bDivide && aDivide == cDivide){
//     console.log(`${a} , ${b}  ,${c} `+ "this is has same last digits")
// }else{
//     console.log("this not have same last numbers")
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// start to check last digit is same or not 




// start to confirm  it is palindrom string or not 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// let a = prompt("enter your name to check palindrom or not")
// let lenth = a.length

// let stringArray = a.split('')
// let  stringArrayrev = stringArray.reverse()
// // console.log(stringArrayrev)
// let stringback =  stringArrayrev.join('')
// // console.log(stringback)

// if (stringback == a ){
//     console.log("it is the palindrom string")
// }else{
//     console.log("it is not the palindrom number")
// }

// check palindrome by loop

// let d = prompt("enter a number to get know about palindrome string or not ")
// let len = d.length;
// for(let i = 0; i <len/2 ; i++){
//     if(d[i] == d[len -1 -i] ){
//         console.log("it is palindrome number ")

//     }else {
//         console.log("it is not palindrome number")
// }
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// end to confirm  it is palindrom string or not 
