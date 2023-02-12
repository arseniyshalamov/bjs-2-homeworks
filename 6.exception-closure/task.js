//задание 1
function parseCount(value) {
    if (isNaN(Number.parseFloat(value))) {
        throw new Error('Невалидное значение');
    } else {
        return Number.parseFloat(value);
    }
}

function validateCount(newValue) {
    try {
        return parseCount(newValue)
    } catch (error) {
        return error;
    }
}

//задание 2
class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        const p = this.perimeter / 2;
        return parseFloat(Math.sqrt((p * (p - this.a)) * (p - this.b) * (p - this.c)).toFixed(3));
        
    }
}

function getTriangle(midle, left, right) {
    try {
        return new Triangle(midle, left, right);
    } catch (error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}