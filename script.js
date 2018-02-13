const addNew = (text, div) => {
    let newElement = document.createElement("p");
    newElement.textContent = JSON.stringify(text);
    document.getElementById(div).appendChild(newElement);
}

const clear = (div) => {
    document.getElementById(div).innerHTML = "";
}

// add
const add = (x, y) => x + y;
document.getElementById("addButton").onclick = function () {
    clear("add");
    let x = parseInt(document.getElementById("addInput1").value);
    let y = parseInt(document.getElementById("addInput2").value);
    addNew(add(x, y), "add");
}

// multiply
const multiply = (x, y) => {
    let ans = x;
    for (let i = 1; i < y; i = add(i, 1)) {
        ans = add(x, ans);
    }
    return ans;
}
document.getElementById("multiplyButton").onclick = function () {
    clear("multiply");
    let x = parseInt(document.getElementById("multiplyInput1").value);
    let y = parseInt(document.getElementById("multiplyInput2").value);
    addNew(multiply(x, y), "multiply");
}

// power
const power = (x, y) => {
    let ans = x;
    for (let i = 1; i < y; i = add(i, 1)) {
        ans = multiply(ans, x);
    }
    return ans;
}
document.getElementById("powerButton").onclick = function () {
    clear("power");
    let x = parseInt(document.getElementById("powerInput1").value);
    let y = parseInt(document.getElementById("powerInput2").value);
    addNew(power(x, y), "power");
}

// factorial
const factorial = (x) => {
    let ans = 1;
    let y = 1;
    for (let i = 0; i < x; i = add(i, 1)) {
        ans = multiply(ans, y);
        y = add(y, 1);
    }
    return ans;
}
document.getElementById("factorialButton").onclick = function () {
    clear("factorial");
    let x = parseInt(document.getElementById("factorialInput").value);
    addNew(factorial(x), "factorial");
}

// fibonacci
const fibonacci = (x) => {
    let f0 = 0;
    let f1 = 1;
    let f2 = add(f0, f1);
    for (let i = 3; i < x; i = add(i, 1)) {
        f0 = f1;
        f1 = f2;
        f2 = add(f0, f1);
    }
    return f2;
}
document.getElementById("fibonacciButton").onclick = function () {
    clear("fibonacci");
    let x = parseInt(document.getElementById("fibonacciInput").value);
    addNew(fibonacci(x), "fibonacci");
}