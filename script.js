function add(x,y){
    return x+y
};
function subtract(x,y){
    return x-y
};
function multiply(x,y){
    return x*y
};
function divide(x,y){
    if (y===0) return "Nu-uh";
    return x/y
};
function operate(x,y,operator){
    switch (operator){
        case "+":
            return add(+x,+y)
        case "-":
            return subtract(+x,+y)
        case "*":
            return multiply(+x,+y)
        case "/":
            return divide(+x,+y)
}
};
function operatorDetected(x){
    mainArray[-1]=calcDisplay.textContent;
    if (mainArray.length>3){
        mainArray.splice(0,mainArray.length, operate(mainArray[0], mainArray[2], mainArray[1]))
    };
    mainArray.push(x)
}

const calcDisplay=document.querySelector("#display");
let mainArray=[calcDisplay.textContent];

const numbers=document.querySelectorAll(".numbers");
Array.from(numbers).forEach((x)=>x.addEventListener("click", x=>calcDisplay.textContent+=x.target.textContent));

const operators=document.querySelectorAll(".operators");
Array.Array.from(operators).forEach((x)=>x.addEventListener("click", operatorDetected(x.target.textContent)))