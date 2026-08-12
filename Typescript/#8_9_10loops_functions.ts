// Functions - It is a set of instruction that perform a specific task

function login(){
    // fill the username
    // fill the password - 
    // click on login button
}

// login()


// 100 TCs - 300 lines of code - 195

// Duplication - Solve the problem of duplication
// Maintaining - 100 Test Cases to fix the issue - 99 steps
// Reusability - We can reuse the code whenever we want


// 1. Named Function - Function declaration - If you want to reuse the function at multiple places
// 2. Anonymous Function - Function Expression - Callback function
// 3. Arrow Function (ES6 - 2015) - Lambda Function - Callback function
// 4. Constructor Function - Class 

// CallBack Function - A function which will be utilised as a parameter of another function 
// is known as call back function


function login1(fun:Function){ // fun - callback function
    fun()
}

login1(function(){
    console.log("This is a call back");
    
})

//1.Named function - Function declaration -
//  If you want to reuse the function at multiple places
/*
=====================================================================

Anonymous Function Definition

An Anonymous Function is a function without a name.

Since it has no name, it is usually assigned to a variable or passed as an argument.
main usage of anonymous functions inside the playwrite to write the test cases 
and we can use it as a callback function 

for example :- Test he shown in the code 

/*



let variable =function (parameters) // we stored it inside the variable and this variable becomes name of the function 

{

code 
return 

}

variable (arguments)

*/


let message = function (name:string ,age :number)

{console.log(`Youe name is ${name} and age is ${age}`)}
message ("Rahul", 32) 

// 3. Arrow Function (ES6 - 2015) - Lambda Function - Callback function 
// which is known as anonymous function but it is more concise and shorter way to write the function.
// Arrow function is also part of expression function it has given symbol (=>) which appars to arrow 
// that reason name comes as arrow function also used as a callback function. this is used for one time 
// utilization of function and it is not reusable.
// This function given certain purpose
//1. this is also part of anonymous function and will not have any name
//also works exactly Same way however anonymos function is works.
// you will not write the function key word just write => 
//2.This function will be declared by using =>  arrow symbole after paranthesis  () 
//3.This function use to shorten the number of lines codes.
//4. if there is only one line of code then we can skipe the curly braces 
// in side the arrow. if there are multiple lines of code then we have to use the curly braces
// inside the arrow function.

//syntax of arrow function

/*

let var = (param:datatype)=>{code}

*/

let sum1 = (a:number,b:number)=> console.log(a+b)
sum1(10,90) // 100


let sum2 = (a:number,b:number)=> (a+b)// 
sum2(10,90) // in console it will not print the value because it is returning the value and we have to store it inside the variable and we can use it later on
let res = sum2(10,90) // will return the value and we can store it inside the variable(res) 
// and we can use it later on.
console.log(res) // 100

// Default parameter and optional parameter - A default parameter is a parameter that has a default
//  value assigned to it.If the caller does not provide a value for that parameter, 
// the default value will be used instead. This allows for more 
// flexible function calls and can help reduce the number of required arguments.



function sum3(a:number,b:number){console.log(a+b)}// if sum3() if did not pass any value then
 //it will give an error because it is mandatory to pass the value for a and b. 
sum3(10,90) // 100


function sum4(a:number,b:number=50) // for b we give value of 50 and sum4 also (100) in that case
//  value overrides the default value of 50 and it will give the output of 200.
{console.log(a+b)}// 
sum4(100,100)// here we are passing the value of 100 for b and it will override
// the default value of 50 and it will give the output of 200. 
sum4(300)//here we are not passing the value of b and it will take the default value of 50 
//and it will give the output of 350.

//Method Overloading- 

// is a process where you can declare the method name with different parameters know as 
// method overloading.we do not have option of method overloading in typescript/Typescript but
//  we can achieve the same functionality by using default parameter and optional parameter.


//for example : over on sum4 you will get the popup 

function sum4(a:number,b:number=50,c:number=199)

{console.log(a+b)

}

//optioanl parmeter {?} -A parameter which may or not be provided with the value during the function call.

function display(name:string,age?:number)

{console.log(name,age) }

    display("priya")//if we remove second paramenter value 23 doesn't gives error and 
    //in condole it will print as "undefined" after updating ? if we remove the ? and parameter
    //  values if gives an error. 
    
    display("Raja",30) // This is called method overloading same function name with different parameter 

function display1(name:string,age?:number):void{
if (age == undefined){
    console.log("Name:", name);
}
else 
{console.log("Name:",name);
    console.log("Age:",age)
}

}

display("Ramesh")
display("Kunal", 25)

console.log("*******************************");

let str = "weclome to typescript"
let str1 = "weclome to typescript"
let str2 = "weclome to plywireight"

console.log(str.concat(str1,str2))

