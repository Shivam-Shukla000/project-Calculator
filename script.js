let num1 = ""
let num2 = ""
let opId = ""
let result = ""
let display = ""
let evl = ""

function clear() {
    num1 = ""
    num2 = ""
    opId = ""
    result = ""
    display = ""
    evl = ""
    updateScreen()
    updateAnswer()
}
function updateScreen() { 
    let screen =`${num1}${opId}${num2}`
    document.querySelector('.screen').textContent = screen
}
function updateAnswer() {
    document.querySelector('.result').innerHTML = result
}
function add(a, b) {
    return parseFloat(a) + parseFloat(b)
}
function sub(a, b) {
    return parseFloat(a) - parseFloat(b)
}
function multiply(a, b) {
    return parseFloat(a) * parseFloat(b)
}
function divide(a, b) {
    return parseFloat(a) / parseFloat(b)
}

function operator(op, num1, num2) {
    if (op == "add") {return add(num1, num2)} 
    else if (op == "sub") {return sub(num1, num2)}
    else if (op == "multiply") {return multiply(num1, num2)}
    else if (op == "devid") {return devid(num1, num2)}
    else {return "syntax error"}
}
function displayValue(e) {
    let key = e.srcElement.accessKey
    let idNumber = e.srcElement.id
    let targetClass = e.srcElement.className
        if ( idNumber == "c" ) {clear()}
        else if (targetClass == 'operator' ) { 
            if (evl != "" && num2 != "") {
                num1 = operator(evl, num1, num2)
                num2 = ""
                evl = key
                updateScreen()
            }
            else{
            evl = key
            opId = idNumber
            updateScreen()
            }
        }
        else if (idNumber == "=") {
            result = operator(evl, num1, num2) 
            updateAnswer()
        }

        else if (evl != "") {
            num2 += idNumber;
           updateScreen()
        }
        else if (evl == "") {
            num1 += idNumber
            updateScreen()
        }   
}




const numbers = document.querySelector('.input')
//const operator = document.querySelector("click", )
numbers.addEventListener('click', displayValue)


