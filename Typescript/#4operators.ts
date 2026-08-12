// Operators - Operators is a symbol that perform various operators


// 1. Arithemtic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators
// 5. Ternary Operator - If else statement


// 1. Arithmetic OP - Used to perform mathematical calculations
    
    // 1. Addition (+)
    // 2. Subtraction (-)
    // 3. Multiplication (*)
    // 4. Division (/)
    // 5. Modulus (%) - Remainder
    // 6. Exponential (**) - Power
    // 7. Increment (++) - Increase the value of the variable by 1
    // 8. Decrement (--) - Decrease the value of the variable by 1

    let number1 = 10
    let number2 = 3

    // 1. Addition (+) - Addition or concatenation
    console.log(number1 + number2);

    // 2. Subtraction (-)
    console.log(number1 - number2);

    // 3. Multiplication (*)
    console.log(number1 * number2)

    // 4. Division (/)
    console.log(number1 / number2) // 10/3 - 3.333333

    // 5. Modulus (%) - Always gives your positive remainder after the division It is commonly used to check whether a number
    //  is even or odd, determine divisibility, execute logic at regular intervals, 
    // and solve counting or grouping problems.
    console.log(number1 % number2); // 11 % 3 - 2

    // 6. Exponential (**) - Power of one value of other value
    console.log(number1 ** number2) // 10 ** 3 - 10^3 - 10*10*10

    // 7. Increment (++) - Increase the value of the variable by 1

    let number3 = 10

    // a. Pre-increment (++number3) - First the value of the variable will get incremented
    // and then the action will be performed.

    console.log(++number3) // 11
    

    let number4 = 10

    // b. Post-increment (number3++) - First the action will be performed and then the value of 
    // variable will be incremented
    console.log(number4++) // 10
    console.log(number4) // 11

    // Assigment
    // 8. Decrement (--) - Decreases the value of the variable by 1

        // a. pre-decrement (--variable)
        // b. post-decrement (variable--)
    

        console.log(--number4) // 9
        console.log(number4--) // 10 9 
        console.log(number4) // 
    // Loops - for, while , do-while

    console.log("***********************************")

    // 2. Comparison Operators - Used to compare the two values and return the result in the form of boolean(true/false)

        // 1. Equal to (==)
        // 2. Not Equal to (!=)
        // 3. Strict Equal to (===)
        // 4. Strict Not Equal to (!==)
        // 5. Greater than (>)
        // 6. Greater than or equal (>=)
        // 7. Less than (<)
        // 8. Less than or equal (<=)

        // 10 >= 10

        // 1. Equal to (==) - Check if the two VALUES are same or not

        let number5 = 10
        let number6 = "10" // NaN  Type coercion
        //let number6 = number("10") // string "10" to number conversion - Type Conversion
        console.log(typeof number6);
        
        console.log(number5 == number6) // 10 == "10"  - 

        // Type Coercion - Implicit conversion of one data type into other datatype
        // Type Conversion - Explicitly conversion of one data type into another


        // 2. Not Equal to (!=) - Opposite to Equal to

        console.log(number5 != number6)

        // 3. Strict Equal to (===) - Checks if the two VALUES along with DATATYPES of the variables
        // are same or not
        console.log(number5 === number6) 

        // 4. Strict Not Equal to (!==) // Opposite to Strict Equal to
        //  (operator compares both the value and the data type.)
    //It returns true if the value or the data type is different.
    //It returns false only if both the value and the data type are the same.

        console.log(number5 !== number6)
        
        // Assignment - 

// 5. Greater than (>)
       let number7 = 10
       let number8 = 20

       console.log(number7 > number8) // false

        // 6. Greater than or equal (>=)

        console.log(number7 >= number8) // false

        // 7. Less than (<)


        console.log(number7 < number8) // true
        // 8. Less than or equal (<=)

        console.log(number7 <= number8) // true


        console.log(5 > 2)
        console.log(10 < 20);

    // 3. Logical Operators - Used to compare mulitple conditions to get the final result.
    // It will compare 2 expressions and return the result in the form of boolean.

    // (5>2)  (10>20)

        // 1. AND (&&) - Both of the conditions are true then only it will return us return
        // 2. OR (||) - Either of the condition is true - it will return us a true value
        // 3. NOT (!) - It will reverse the result from true to false and false to true
        
        
    // 1. AND (&&)

    // true && true - true
    // true && false - false
    // false && true - false
    // false && false - false

    console.log("AND (&&)", (10>6) && (20>13)) // true
    console.log("AND (&&)", (10>6) && (20>130)) // false
    console.log("AND (&&)", (10>60) && (20>13)) // false
    console.log("AND (&&)", (10>60) && (20>130)) // false
  


    // 2. OR (||)

    // true || true - true
    // true || false - true
    // false || true - true
    // false || false - false

    console.log("OR (||)", (10>6) || (20>13)) // true
    console.log("OR (||)", (10>6) || (20>130)) // true
    console.log("OR (||)", (10>60) || (20>13)) // true
    console.log("OR (||)", (10>60) || (20>130)) // false
    
    
    // 3. NOT (!) - Reverse the result

   // !true - false
   // !false - true

   console.log(!(20 >15)) // !true


   // 4. Assignment Operator  - Assigns the value to a variable

   let a1 = 90


   // What is difference between =, == and ===

   // = - Assigns the value to a variable
   // == - check if the the VALUES are variables are same or not
   // === - Check if the VALUES along with the DATATYPES are same or not