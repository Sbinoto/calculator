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
function keyOrNode(x){
    switch (x.type){
    case "keydown":
        return `${x.key}`
    default:
        return `${x.target.textContent}`
}
}
function populate(x){
    if (calcDisplay.textContent=="0" ||logger.at(-1)==1||logger.length==0){
        calcDisplay.textContent=""
    };
    calcDisplay.textContent+=keyOrNode(x);
    logger.push(0)
};
function operatorDetected(x){
    if ("-+/*".includes(mainArray.at(-1))) return;
    if (mainArray.length==1){mainArray.length=0}
    mainArray.push(calcDisplay.textContent);
    if (mainArray.length>3){
        mainArray.splice(0,mainArray.length, operate(mainArray[0], mainArray[2], mainArray[1]))
        logger.length=0
    };
    mainArray.push(keyOrNode(x))
    logger.push(1)
};
function equalClicked(){
    if (mainArray.length==1){mainArray.length=0}
    if (logger.at(-1)==0){mainArray.push(calcDisplay.textContent)};
    if (mainArray.length>=3){
        mainArray.splice(0,mainArray.length, operate(mainArray[0], mainArray[2], mainArray[1]))
    };
    calcDisplay.textContent=mainArray[0].toFixed(4)==mainArray[0]?mainArray[0]:mainArray[0].toFixed(4)
    logger.length=0
}
function addDecimal(){
    if (calcDisplay.textContent.includes(".")) return;
    calcDisplay.textContent+="."
    logger.push(0)
}
function deleteLast(){
    switch (logger.at(-1)){
        case 0:
            calcDisplay.textContent=calcDisplay.textContent.slice(0, -1)
            break
        case 1:
            mainArray.length=mainArray.length-1
    }
    if (calcDisplay.textContent=="") calcDisplay.textContent="0"
}
function clearAll(){
    logger.length=0;
    mainArray.splice(0,mainArray.length,0)
    calcDisplay.textContent="0"
}
function interpretKey(x){
    if ("1234567890".includes(x.key)){
        populate(x)
    }
    else if ("-+*/".includes(x.key)){
        operatorDetected(x)
    }
    else {switch (x.key){
        case ".":
            addDecimal()
            break
        case "Backspace":
            deleteLast()
            break
        case "Enter":
        case "=":
            equalClicked()
            break
        case "Escape":
            clearAll()
            break
    }}
    
}


let logger=[0];

const calcDisplay=document.querySelector("#display");
let mainArray=[0];

const numbers=document.querySelectorAll(".numbers");
Array.from(numbers).forEach(x=>x.addEventListener("click", populate));

const operators=document.querySelectorAll(".operators");
Array.from(operators).forEach(x=>x.addEventListener("click", operatorDetected))

const equal=document.querySelector(".equal");
equal.addEventListener("click", equalClicked )

const decimal=document.querySelector(".decimal")
decimal.addEventListener("click", addDecimal)

const back=document.querySelector(".back")
back.addEventListener("click", deleteLast)

const clear=document.querySelector(".clear")
clear.addEventListener("click", clearAll)

document.addEventListener("keydown", interpretKey)