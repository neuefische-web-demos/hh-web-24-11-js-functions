console.clear();

// Function Declaration

// function printPersonalData() {
//   const name = "Alex";
//   const age = 24;
//   console.log(name + " is " + age + " years old.");
// }

// Function Call

// printPersonalData();
// printPersonalData();

// Function Parameters

function printPersonalData(name, age) {
  console.log(name + " is " + age + " years old.");
}

// Function Declaration: Parameter, Function Call: Argument

printPersonalData("Alex", 24);
printPersonalData("Denise", 21);

// Return Value

function calculateSum(a, b) {
  const sum = a + b;
  return sum;
  console.log(sum); // will never be logged to the console
}

const sum = calculateSum(5, 6);

console.log(sum);

function checkInputLength(inputString) {
  if (inputString.length > 3) {
    return true;
  } else {
    return false;
  }
}

const isValid = checkInputLength("hi");

console.log(isValid);
// console.log(checkInputLength("hi"));
