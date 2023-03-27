// Without running the code below, explain in your own
// words what the result of each block of code will be and
// why.
// Block 1
var b = 1;
function someFunction(number) {
function otherFunction(input) {
return b;
}
b = 5;
return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// Block 2
var a = 1;
function b2() {
a = 10;
return;
function a() { }
}
b2();
console.log(a);
// Block 3
let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);
}
// Block 1:
// The code creates a variable b and sets its initial value to 1. Then, a function named someFunction is declared that takes a number as an argument. Inside someFunction, another function named otherFunction is declared and returned. This inner function simply returns the value of b. Before someFunction returns, it sets the value of b to 5. Next, someFunction is called with an argument of 9, and the result is assigned to a variable named firstResult. Then, the variable firstResult is called with an argument of 2, and the result of that call is assigned to a variable named result. Without actually running the code, the value of result is expected to be 5 because when firstResult is called, it invokes otherFunction, which returns the current value of b, which was set to 5 before someFunction returned.

// Block 2:
// The code creates a variable a and sets its initial value to 1. Then, a function named b2 is declared. Inside b2, a local function named a is declared, but it is never invoked. Instead, b2 sets the value of a to 10 and then returns. When b2 is called, it does not return anything, and it sets the value of the outer variable a to 10, but that change has no effect because the inner function a is never invoked. After b2 returns, the value of a is expected to be 1 because the inner function a never changes the value of the outer variable a.

// Block 3:
// The code creates a variable i without assigning it a value. Then, a for loop is declared that initializes i to 0 and iterates until i is less than 3. Inside the loop, a const arrow function named log is declared that logs the current value of i to the console. Then, setTimeout is called with a reference to log and a delay of 100 milliseconds. The expectation is that this will cause log to be invoked three times, each time with a different value of i. However, because of the way closures work, log references the variable i, not its value at the time the arrow function was declared. Therefore, when log is invoked after the loop has finished executing, it will always log the value of i, which will be 3 at that point. So, the expected output when the code is run is that "3" will be logged to the console three times.