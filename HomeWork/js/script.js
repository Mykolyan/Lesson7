// Домашнє завдання
// ----1----
// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

function Calculator(x, y) {
    this.read = function () {
        this.firstValue = parseFloat(prompt('Enter first value:', 0));
        this.secondValue = parseFloat(prompt('Enter second value:', 0));
    }

    this.sum = function () {
        return this.firstValue + this.secondValue;
    };
    
    this.mul = function () {
        return this.firstValue * this.secondValue;
    };
}

let calculator = new Calculator();

calculator.read();

console.log('Summ:', calculator.sum());
console.log('Multiplication', calculator.mul());