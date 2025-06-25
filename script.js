const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    const action = button.getAttribute("data-action");
    const isEqual = button.classList.contains("equal");

    if (value) {
      display.value += value;
    } else if (action === "clear") {
      display.value = "";
    } else if (action === "delete") {
      display.value = display.value.slice(0, -1);
    } else if (isEqual) {
      try {
        const result = eval(display.value);
        if (
          result === Infinity ||
          result === -Infinity ||
          isNaN(result)
        ) {
          display.value = "Error";
        } else {
          display.value = result;
        }
      } catch {
        display.value = "Error";
      }
    }
  });
});
