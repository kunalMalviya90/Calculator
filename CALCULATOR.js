let displayValue = "0";
let currentOperator = "";
let result = 0;
let isDarkMode = false;

function appendToDisplay(value) {
  if (displayValue === "0" || displayValue === "Error") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  currentOperator = "";
  result = 0;
  updateDisplay();
}

function calculate() {
  try {
    result = eval(displayValue);
    displayValue = result.toString();
  } catch (error) {
    displayValue = "Error";
  }
  currentOperator = "";
  updateDisplay();
}

function toggleDarkMode() {
  const body = document.body;
  const calculator = document.querySelector(".calculator");
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");

  isDarkMode = !isDarkMode;
  body.classList.toggle("dark-mode", isDarkMode);
  calculator.classList.toggle("dark-mode", isDarkMode);
  display.classList.toggle("dark-mode", isDarkMode);
  buttons.forEach(button => button.classList.toggle("dark-mode", isDarkMode));
}

toggleDarkMode(); // Set default mode based on user preference or system settings

