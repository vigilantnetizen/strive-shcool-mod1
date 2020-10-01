/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/

console.log(12+20);


/* EXERCISE 2
Create a variable named X containing the number 12
*/

let x = 12;

console.log("this is the value of X ->", x);

/* EXERCISE 3
Create a variable named name containing the string John Doe
*/

let myNameis = "John Doe";

console.log(myNameis)


/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/

let Y = 12

console.log("This is a value of ex 4 ", 12-Y)


/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/

let name1 = "john"
let name2 = "John"

console.log("this is a boolean", name1 === name2)
console.log("ex 5 pt2", name1.toLocaleLowerCase() === name2.toLocaleLowerCase());



/* EXERCISE 6
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/

let number = 9;

if (number ===  1) {

console.log("one");

}

if (number ===  2) {

    console.log("two");
    
    }

    if (number ===  3) {

        console.log("three");
        
        }
    
        if (number ===  4) {

            console.log("four");
            
            }
            
            if (number ===  5) {
            
                console.log("five");
                
                }
            
                if (number ===  6) {
            
                    console.log("six");
                    
                    }

                    if (number ===  7) {

                        console.log("seven");
                        
                        }
                        
                        if (number === 9) {
                        
                            console.log("eight");
                            
                            }
                        
                            if (number ===  9) {
                        
                                console.log("nine");
                                
                                }



/* EXERCISE 7 (EXTRA)
Insert a value in a variable based on the result of a ternary if
*/

let Z = number > 10 ? 0 : 1;
console.log(Z)



/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/
