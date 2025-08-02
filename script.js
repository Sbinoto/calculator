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
function populate(x){
    if (calcDisplay.textContent=="0" ||"-+/*".includes(mainArray.at(-1))){
        calcDisplay.textContent=""
    };
    calcDisplay.textContent+=x.target.textContent;
    logger.push(0)
};
function operatorDetected(x){
    console.log(mainArray)
    if ("-+/*".includes(mainArray.at(-1))) return;
    if (mainArray.length==1){mainArray.length=0}
    mainArray.push(calcDisplay.textContent);
    if (mainArray.length>3){
        mainArray.splice(0,mainArray.length, operate(mainArray[0], mainArray[2], mainArray[1]))
    };
    mainArray.push(x.target.textContent)
    logger.push(1)
};
function equalClicked(){
    if (mainArray.length==1){mainArray.length=0}
    if (logger.at(-1)==0){mainArray.push(calcDisplay.textContent)};
    if (mainArray.length>=3){
        mainArray.splice(0,mainArray.length, operate(mainArray[0], mainArray[2], mainArray[1]))
    };
    calcDisplay.textContent=mainArray[0]
}

let logger=[0];

const calcDisplay=document.querySelector("#display");
let mainArray=[0];

const numbers=document.querySelectorAll(".numbers");
Array.from(numbers).forEach((x)=>x.addEventListener("click", populate));

const operators=document.querySelectorAll(".operators");
Array.from(operators).forEach((x)=>x.addEventListener("click", operatorDetected))

const equal=document.querySelector(".equal");
equal.addEventListener("click", equalClicked )