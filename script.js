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
    if(inputCount == 0){
        if(e.target.innerText == "+" || e.target.innerText == "-" || e.target.innerText == "*"
        || e.target.innerText == "/" || e.target.innerText == "%"){
            
        }
        else{
            display.removeChild(display.firstChild);
            display.appendChild(document.createTextNode(e.target.innerText));
            inputCount += 1;
            if(e.target.innerText == "." ){
                dotCount += 1;
            }
        }
    }
    else{
        let txt = display.innerText;
        let text = txt.split('');
        switch (e.target.innerText){
            case "-":
                if(text[(text.length-1)] == "+" || text[(text.length-1)] == "%"
                || text[(text.length-1)] == "*" || text[(text.length-1)] == "/"){
                    display.removeChild(display.lastChild);
                    display.appendChild(document.createTextNode(e.target.innerText));
                    dotCount = 0;
                    operationCount += 1;
                }
                else{
                    if(operationCount == 0){
                        display.appendChild(document.createTextNode(e.target.innerText));
                        dotCount = 0;
                        operationCount += 1;
                    }
                }
                break;
            case "+":
                if(text[(text.length-1)] == "%" || text[(text.length-1)] == "-"
                || text[(text.length-1)] == "*" || text[(text.length-1)] == "/"){
                    display.removeChild(display.lastChild);
                    display.appendChild(document.createTextNode(e.target.innerText));
                    dotCount = 0;
                    operationCount += 1;
                }
                else{
                    if(operationCount == 0){
                        display.appendChild(document.createTextNode(e.target.innerText));
                        dotCount = 0;
                        operationCount += 1;
                    }
                }
                break;
            case "*":
                if(text[(text.length-1)] == "+" || text[(text.length-1)] == "-"
                || text[(text.length-1)] == "%" || text[(text.length-1)] == "/"){
                    display.removeChild(display.lastChild);
                    display.appendChild(document.createTextNode(e.target.innerText));
                    dotCount = 0;
                    operationCount += 1;
                }
                else{
                    if(operationCount == 0){
                        display.appendChild(document.createTextNode(e.target.innerText));
                        dotCount = 0;
                        operationCount += 1;
                    }
                }
                break;
            case "/":
                if(text[(text.length-1)] == "+" || text[(text.length-1)] == "-"
                || text[(text.length-1)] == "*" || text[(text.length-1)] == "%"){
                    display.removeChild(display.lastChild);
                    display.appendChild(document.createTextNode(e.target.innerText));
                    dotCount = 0;
                    operationCount += 1;
                }
                else{
                    if(operationCount == 0){
                        display.appendChild(document.createTextNode(e.target.innerText));
                        dotCount = 0;
                        operationCount += 1;
                    }
                }
                break
            case "%":
                if(text[(text.length-1)] == "+" || text[(text.length-1)] == "-"
                || text[(text.length-1)] == "*" || text[(text.length-1)] == "/"){
                    display.removeChild(display.lastChild);
                    display.appendChild(document.createTextNode(e.target.innerText));
                    dotCount = 0;
                    operationCount += 1;
                }
                else{
                    if(operationCount == 0){
                        display.appendChild(document.createTextNode(e.target.innerText));
                        dotCount = 0;
                        operationCount += 1;
                    }
                }
                break;
            case ".":
                if(dotCount == 0){
                    display.appendChild(document.createTextNode(e.target.innerText));
                    dotCount += 1;
                }
                break;
            default:
                display.appendChild(document.createTextNode(e.target.innerText));
                break;
        }
    }
}

//erase
function removeElement(){
    if(display.hasChildNodes() == true){
        let txt = display.innerText;
        let text = txt.split('');
        if(text[(text.length-1)] == "."){
            dotCount = 0;
        }
        if(text[(text.length-1)] == "+"){
            operationCount = 0;
        }
        if(text[(text.length-1)] == "-"){
            operationCount = 0;
        }
        if(text[(text.length-1)] == "*"){
            operationCount = 0;
        }
        if(text[(text.length-1)] == "/"){
            operationCount = 0;
        }
        if(text[(text.length-1)] == "%"){
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