var display = document.getElementById("display");

//buttons
var zero = document.getElementById("Zero");
var one = document.getElementById("One");
var two = document.getElementById("Two");
var three = document.getElementById("Three");
var four = document.getElementById("Four");
var five = document.getElementById("Five");
var six = document.getElementById("Six");
var seven = document.getElementById("Seven");
var eigth = document.getElementById("Eigth");
var nine = document.getElementById("Nine");
var sub = document.getElementById("Subtraction");
var add = document.getElementById("Adiction");
var div = document.getElementById("Division");
var mult = document.getElementById("Multiplication");
var result = document.getElementById("Result");
var dot = document.getElementById("Dot");
var del = document.getElementById("Delete");
var c = document.getElementById("C");

var dotCount = 0;
var operationCount = 0;
var inputCount = 0;
var lastPressed = null;
var alreadyPressed = false;

//reverse the signal of the number
function reverse(){
    let txt = display.innerText;
    text = txt.split('');
    txt = "";
    for (let index = 0; index < text.length; index++){
        switch (text[index]){
            case "-":
                text[index] = "+";
                break;
            case "+":
                text[index] = "-";
                break;
            default:
                break;
        }
        txt += text[index];
    }
    while(display.hasChildNodes()){
        display.removeChild(display.firstChild);
    }
    display.appendChild(document.createTextNode(txt));
}

//calculate the result
function calculation(e){
    let val1 = 0;
    let val2 = 0;
    let resultado = 0;
    let txt = display.innerText;
    let txtPlus = txt.indexOf("+");
    let txtMinus = txt.indexOf("-");
    let txtMulti = txt.indexOf("*");
    let txtDiv = txt.indexOf("/");
    let txtPercnt = txt.indexOf("%");
    let text;

    if(txtPlus > -1){
        text = txt.split('');
        for (let index = 0; index < txtPlus; index++){
            val1 += text[index];
        }
        for (let index = txtPlus+1; index < text.length; index++){
            if(text[index] == "+" || text[index] == "-" || text[index] == "/" || text[index] == "*" ){
                break;
            }
            val2 += text[index];
        }
        resultado = parseFloat(val1) + parseFloat(val2);
    }

    if(txtMinus > -1){
        text = txt.split('');
        for (let index = 0; index < txtMinus; index++){
            val1 += text[index];
        }
        for (let index = txtMinus+1; index < text.length; index++){
            if(text[index] == "+" || text[index] == "-" || text[index] == "/" || text[index] == "*" ){
                break;
            }
            val2 += text[index];
        }
        resultado = parseFloat(val1) - parseFloat(val2);
    }

    if(txtMulti > -1){
        text = txt.split('');
        for (let index = 0; index < txtMulti; index++){
            val1 += text[index];
        }
        for (let index = txtMulti+1; index < text.length; index++){
            if(text[index] == "+" || text[index] == "-" || text[index] == "/" || text[index] == "*" ){
                break;
            }
            val2 += text[index];
        }
        resultado = parseFloat(val1) * parseFloat(val2);
    }

    if(txtDiv > -1){
        text = txt.split('');
        for (let index = 0; index < txtDiv; index++){
            val1 += text[index];
        }
        for (let index = txtDiv+1; index < text.length; index++){
            if(text[index] == "+" || text[index] == "-" || text[index] == "/" || text[index] == "*" ){
                break;
            }
            val2 += text[index];
        }
        resultado = parseFloat(val1) / parseFloat(val2);
    }

    if(txtPercnt > -1){
        text = txt.split('');
        for (let index = 0; index < txtPercnt; index++){
            val1 += text[index];
        }
        for (let index = txtPercnt+1; index < text.length; index++){
            if(text[index] == "+" || text[index] == "-" || text[index] == "/" || text[index] == "*" ){
                break;
            }
            val2 += text[index];
        }
        if(val2 == 0){
            resultado = parseFloat(val1) / 100;
        }
        else{
            resultado = parseFloat(val2) * (parseFloat(val1) / 100);
        }
    }

    while(display.hasChildNodes()){
        display.removeChild(display.firstChild);
    }
    lastPressed = e.target.innerText;
    resultado = +resultado.toFixed(5);
    display.appendChild(document.createTextNode(resultado));
    txt = display.innerText;
    text = txt.split('');
    for (let index = 0; index < text.length; index++){
        if(text[index] == "."){
            dotCount += 1;
        }
    }
    operationCount = 0;
}

//add numbers/operations
function addElement(e){
    if(e.target.innerText == "." ){
        dotCount += 1;
    }
    if(e.target.innerText == "+" || e.target.innerText == "*" || e.target.innerText == "/"
    || e.target.innerText == "-" || e.target.innerText == "%"){
        dotCount = 0;
        operationCount += 1;
    }
    if(inputCount == 0){
        if(e.target.innerText == "+" || e.target.innerText == "*" || e.target.innerText == "/" 
        || e.target.innerText == "%" || e.target.innerText == "-"){
            lastPressed = e.target.innerText;
        }
        else{
            display.removeChild(display.firstChild);
            display.appendChild(document.createTextNode(e.target.innerText));
            lastPressed = e.target.innerText;
        }
    }
    if(inputCount > 0){
        switch (lastPressed) {
            case ".":
                if(lastPressed !== e.target.innerText && e.target.innerText !== "+" && e.target.innerText !== "*" &&
                e.target.innerText !== "/" && e.target.innerText !== "-" && e.target.innerText !== "%"){
                    display.appendChild(document.createTextNode(e.target.innerText));
                    lastPressed = e.target.innerText;
                    alreadyPressed = true;
                }
                break;
            case "-":
                if(lastPressed !== e.target.innerText && e.target.innerText !== "+" && e.target.innerText !== "*" &&
                e.target.innerText !== "/" && e.target.innerText !== "%"){
                    display.appendChild(document.createTextNode(e.target.innerText));
                    lastPressed = e.target.innerText;
                    alreadyPressed = true;
                }
                break;
            case "+":
                if(lastPressed !== e.target.innerText && e.target.innerText !== "-" && e.target.innerText !== "*" &&
                e.target.innerText !== "/" && e.target.innerText !== "%"){
                    display.appendChild(document.createTextNode(e.target.innerText));
                    lastPressed = e.target.innerText;
                    alreadyPressed = true;
                }
                break;
            case "*":
                if(lastPressed !== e.target.innerText && e.target.innerText !== "+" && e.target.innerText !== "-" &&
                e.target.innerText !== "/" && e.target.innerText !== "%"){
                    display.appendChild(document.createTextNode(e.target.innerText));
                    lastPressed = e.target.innerText;
                    alreadyPressed = true;
                }
                break;
            case "/":
                if(lastPressed !== e.target.innerText && e.target.innerText !== "+" && e.target.innerText !== "*" &&
                e.target.innerText !== "-" && e.target.innerText !== "%"){
                    display.appendChild(document.createTextNode(e.target.innerText));
                    lastPressed = e.target.innerText;
                    alreadyPressed = true;
                }
                break;
            case "%":
                if(lastPressed !== e.target.innerText && e.target.innerText !== "+" && e.target.innerText !== "*" &&
                e.target.innerText !== "/" && e.target.innerText !== "-"){
                    display.appendChild(document.createTextNode(e.target.innerText));
                    lastPressed = e.target.innerText;
                    alreadyPressed = true;
                }
                break;
            default:
                break;
        }
        if(lastPressed !== "-" && lastPressed !== "+" && lastPressed !== "*" && lastPressed !== "/"
        && lastPressed !== "." && lastPressed !== "%" && alreadyPressed == false && !(dotCount > 1)
        && !(operationCount > 1)){
            display.appendChild(document.createTextNode(e.target.innerText));
            lastPressed = e.target.innerText;
        }
        alreadyPressed = false;
    }
    inputCount += 1;
}

//erase
function removeElement(){
    if(display.hasChildNodes() == true){
        if(toString(display.lastChild) == toString(".")){
            dotCount = 0;
        }
        if(toString(display.lastChild) == toString("+")){
            operationCount = 0;
        }
        if(toString(display.lastChild) == toString("-")){
            operationCount = 0;
        }
        if(toString(display.lastChild) == toString("*")){
            operationCount = 0;
        }
        if(toString(display.lastChild) == toString("/")){
            operationCount = 0;
        }
        if(toString(display.lastChild) == toString("%")){
            operationCount = 0;
        }
        display.removeChild(display.lastChild);
    }
    if(display.hasChildNodes() == false){
        display.appendChild(document.createTextNode(0));
        inputCount = 0;
        dotCount = 0;
        operationCount = 0;
    }
}

//erase everything
function removeAllElements(){
    while(display.hasChildNodes()){
        display.removeChild(display.firstChild);
    }
    if(display.hasChildNodes() == false){
        display.appendChild(document.createTextNode(0));
        inputCount = 0;
        dotCount = 0;
        operationCount = 0;
    }
}