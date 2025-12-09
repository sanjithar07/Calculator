const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;

        if (value === "C") {
            currentInput = "";
            display.value = "";
        } 
        else if (value === "=") {
            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
            } catch {
                display.value = "Error";
            }
        } 
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
