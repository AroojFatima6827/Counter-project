
const Heading = document.querySelector(".heading");
const Plus = document.querySelector(".plus");
const Minus = document.querySelector(".minus");
const input = document.querySelector(".Input");
const Reset = document.querySelector(".reset");

let count = 0;

Plus.addEventListener("click", () => {
    const incrementValue = input.valueAsNumber || 1;  
    count += incrementValue; 
    Heading.textContent = count; 
});

Minus.addEventListener("click", () => {
    const decrementValue = input.valueAsNumber || 1;  
    count -= decrementValue; 
    Heading.textContent = count; 
});

Reset.addEventListener("click", () => {
    count = 0; 
    Heading.textContent = count; 
});

input.addEventListener("change", () => {
    const changeByValue = input.valueAsNumber;
    
    if (Number.isNaN(changeByValue) || changeByValue <= 0) {
        input.value = 1; 
    }
});


