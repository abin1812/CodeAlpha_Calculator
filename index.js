const display = document.getElementById("display");
const modeToggle = document.getElementById("toggleMode");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") return calculate();
  if (e.key === "Backspace") return display.value = display.value.slice(0, -1);
  if (e.key === "Escape") return clearDisplay();
  if ("0123456789+-*/().".includes(e.key)) display.value += e.key;
});

// Mode toggle
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  modeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
