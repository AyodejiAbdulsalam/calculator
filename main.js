function calculate(){
const num1=parseFloat(document.getElementById('num1').value)
const num2=parseFloat(document.getElementById('num2').value)
const operation=document.getElementById('operation').value
let result;
switch(operation){
case'add':result=num1+num2
break;
case'subtraction':result=num1-num2
break;
case'multiplication':result=num1*num2
break;
case'division':result=num1/num2
break;
default: result='Invalid number'
}
document.getElementById('result').textContent =result
}
// function calculate() {
//     const num1 =parsefloat(document.getElementById("num1").value);
//     const num2 =parsefloat(document.getElementById("num2").value);
//     const operation = document.getElementById("operation").value;
//     let result;
  
//     switch(operation) {
//       case "add":
//         result = num1 + num2;
//         break;
//       case "subtract":
//         result = num1 - num2;
//         break;
//       case "multiply":
//         result = num1 * num2;
//         break;
//       case "divide":
//         if (num2 !== 0) {
//           result = num1 / num2;
//         } else {
//           result = "Error! Division by zero";
//         }
//         break;
//       default:
//         result = "Invalid operation";
//     }
  
//     document.getElementById("result").textContent = result;
//   }
  


//   Process Overview:
//   The user interacts with the HTML form by entering numbers and selecting an operation. When they click the "Calculate" button, the calculate() function runs and the result is displayed. Below is the detailed sequence of events.
  
//   Step-by-Step Process:
//   1.User Inputs Data:
  
//   The user enters values into the input fields for the first number (num1) and the second number (num2).
//   The user selects an operation (Addition, Subtraction, Multiplication, Division) from the dropdown menu.
//   2.Button Click:
  
//   The user clicks the "Calculate" button, which triggers the JavaScript function calculate() defined in the script.js file.
//   This is done through the onclick="calculate()" attribute in the button element.
//   3. Accessing the Input Values:
  
//   Inside the calculate() function:
//   The code accesses the first number input using:
//   javascript
//   Copy code
//   const num1 = parseFloat(document.getElementById("num1").value);
//   The document.getElementById("num1") selects the input field with the ID num1.
//   The .value gets the value entered by the user (which is initially a string).
//   parseFloat() converts that string into a number and stores it in the num1 variable.
//   Similarly, the second number is accessed with:
//   javascript
//   Copy code
//   const num2 = parseFloat(document.getElementById("num2").value);
//   Accessing the Selected Operation:
  
//   The user’s choice of operation (from the dropdown) is accessed using:
//   javascript
//   Copy code
//   const operation = document.getElementById("operation").value;
//   This selects the dropdown with the ID operation.
//   The .value gets the selected operation (e.g., "add", "subtract", etc.).
//   Switch Case Logic:
  
//   The code uses a switch statement to handle the operation chosen by the user:
//   javascript
//   Copy code
//   switch(operation) {
//     case "add":
//       result = num1 + num2;
//       break;
//     case "subtract":
//       result = num1 - num2;
//       break;
//     case "multiply":
//       result = num1 * num2;
//       break;
//     case "divide":
//       if (num2 !== 0) {
//         result = num1 / num2;
//       } else {
//         result = "Error! Division by zero";
//       }
//       break;
//     default:
//       result = "Invalid operation";
//   }
//   Based on the value of operation, the corresponding block of code is executed:
//   Addition: If operation is "add", it adds num1 and num2.
//   Subtraction: If operation is "subtract", it subtracts num2 from num1.
//   Multiplication: If operation is "multiply", it multiplies num1 by num2.
//   Division: If operation is "divide", it divides num1 by num2, but also checks if num2 is 0 to avoid division by zero, which would cause an error.
//   Displaying the Result:
  
//   Once the operation is performed, the result is stored in the result variable.
//   The result is then displayed in the HTML page by setting the text content of the element with the ID result:
//   javascript
//   Copy code
//   document.getElementById("result").textContent = result;
//   This updates the <span id="result"> element in the HTML with the calculated value.
//   Example of Flow:
//   User inputs 5 in the "First Number" field and 3 in the "Second Number" field.
//   User selects Addition from the dropdown.
//   When the "Calculate" button is clicked:
//   num1 = 5
//   num2 = 3
//   operation = "add"
//   The switch case identifies the "add" operation and performs the addition: 5 + 3 = 8.
//   The result 8 is displayed in the result span on the webpage.