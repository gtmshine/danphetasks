function printer(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(" FizzBuzz");
    return;
  }
  if (num % 3 === 0) {
    console.log("Fizz");
    return;
  }
  if (num % 5 === 0) {
    console.log("Buzz");
    return;
  }
  console.log(num);
}

function runPrinter() {
  for (let i = 1; i <= 100; i++) {
    printer(i);
  }
}

document.getElementById("task3-btn").addEventListener("click", runPrinter);
