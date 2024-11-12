//1
function add(a, b) {
    return a + b;
}
console.log(add(1, 34))

function substract(a, b) {
    return a - b;
}
console.log(substract(1, 34))


function multiply(a, b) {
    return a * b;
}
console.log(multiply(1, 34))


function divide(a, b) {
    return a / b;
}
console.log(divide(1, 34))


//2
function getStringLength(str) {
    return str.length;
}



//3
function checkNumber(num) {
    if (num > 0) {
        return "Число положительное";
    } else if (num < 0) {
        return "Число отрицательное";
    } else {
        return "Число равно нулю"
    }
}

//4 
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum / numbers.length;
}

//5
let person = {
    name: "John",
    age: 30
};

console.log("Имя:", person.name);
console.log("Возраст:", person.age);

//6
function isChetnoe(number) {
    return number % 2 === 0;
}

//7
function isNegative(number) {
    if (number < 0) {
        console.log(number, "Отрицательное")
    } else {
        console.log(number, "Не отрицательное")
    }
}

let num1 = -1;
let num2 = 2;

//8
function isDivide(num1, num2) {
    if (num2 === 0) {
        console.log("Нельзя делить на 0")
    } else if (num1 % num2 === 0) {
        console.log(num1, "делится", num2)
    } else {
        console.log(num1, "не делится", num2);
    }
}