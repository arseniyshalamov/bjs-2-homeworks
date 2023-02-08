//Задача 1. Печатное издание
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(fix) {
    if (fix < 0) {
        this._state = 0; 
    } else if (fix > 100) {
        this._state = 100;
    } else {
        this._state = fix;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

//романы
class NovelBook extends Book {
    constructor (name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

//фантастическа
class FantasticBook extends Book {
    constructor (name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

//детективы
class DetectiveBook extends Book {
    constructor (name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задача 2. Библиотека
class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    //будет принимать объект — книгу или журнал
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }

        //book.state > 30 ? this.books.push(book) : 0;
    }

    //принимать ключ для проведения поиска 
    findBookBy(type, value) {
        return this.books.find(book => book[type] == value) || null;
    }
    //**Создайте метод findBookBy(type, value), который в качестве аргументов будет принимать ключ для проведения поиска (тип, автор, название, год выпуска и пр.) и искомое значение. Метод должен возвращать книгу в случае успеха и null, если запрошенная книга не была найдена.

    //аргумента будет принимать название книги, запрошенной читателем
    giveBookByName(bookName) {
        let thisBook = this.findBookBy("name", bookName);
        if (thisBook) {
            this.books.splice(this.books.indexOf(bookName), 1);
            return thisBook;
        }
        return null
    }
}

//Задача 3. Журнал успеваемости *
class Student {
    constructor (name) {
        this.name = name;
        this.marks = {};
    }

    //если нет пустого массива, то создаем новый массив
    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (Object.keys(this.marks).includes(subject) === false) {
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }
    }

    //средняя оценка
    getAverageBySubject(subject) {
        let averageBySubject = 0;
        if (this.marks[subject] !== undefined) {
        //if(Object.keys(this.marks).includes(subject) === true) {
            averageBySubject = this.marks[subject].reduce((acc, item, index, arr) => {
                acc += item;
                if(index === arr.length - 1) {
                    return acc / arr.length;  
                }
            return acc;
            }, 0)
        }
        return averageBySubject;
    }

    //возвращает общую среднюю оценку
    getAverage() {
        let overallAverage = Object.keys(this.marks).reduce((acc, item, index, arr) => {
            acc += this.getAverageBySubject([item]);
            if(index === arr.length -1) {
             return acc / arr.length;
            }
            return acc;
        }, 0)
        return overallAverage;
    }




    
  }
  
  //возвращает среднюю оценку
  const student = new Student("Олег Никифоров");
  student.addMark(5, "химия");
  student.addMark(5, "химия");
  student.addMark(5, "физика");
  student.addMark(4, "физика");
  student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
  student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
  student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
  student.getAverage(); // Средний балл по всем предметам 4.75