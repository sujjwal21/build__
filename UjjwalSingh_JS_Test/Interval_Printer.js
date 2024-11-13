// Write code that prints numbers from 1 to 10, each number after a 1-second delay.

// Method-1
function intervalPrinter() {
  let count = 0;
  let intervalId = setInterval(() => {
    console.log(count);
    count++;
    if (count > 10) {
      clearInterval(intervalId);
    }
  }, 1000);
}

// intervalPrinter()

// Method-2
function oneToTen() {
  for (let i = 0; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

oneToTen();
