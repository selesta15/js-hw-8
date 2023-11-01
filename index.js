/*
1) Создать объект myBrowser со свойствами name (значение “Chrome”) и version (значение «9.2») - двумя способами
*/

// const myBrowser = {
//     name: "Chrome",
//     version: "9.2"
//   }


// const myBrowser = new Object({ name: "Chrome", version: "9.2" });




/*
2) Создать объект cinema со свойствами soldTickets (хранит в себе число, которое отображает кол-во проданных билетов) и 
ticketCost (цена билета) и задайте значения. 
Напишите функцию которая высчитывает сколько денег заработал кинотеатр за один сеанс.
*/

// const cinema = {
//     soldTickets: 200,
//     ticketCost: 500
// }
// function ernings (cinema) {
//     return cinema.soldTickets * cinema.ticketCost
// }
//  let sum = ernings(cinema)


/*
3) Напишите функцию, которая принимает в качестве аргумента объект и возвращает вложенный массив вида [[key, value], [key, value]]. 
То есть, если я вызову функцию objectToArr({ a: 1, b: 2 }), то результатом выполнения должен быть массив - [['a', 1], ['b', 2]]. 
Для решения этой задачи вам нужны будут следующие методы: Object.keys() или Object.entries()
*/

// function objectToArr (obj) {
//     const entries = Object.entries(obj)
//     const result = entries.map(entry => [entry[0], entry[1]]);
//     return result
// }
// const inputObject = { a: 1, b: 2 };
// const resultArray = objectToArr(inputObject);
// console.log(resultArray);

/*
4) Дан объект. Нужно извлечь число 123 одной строкой
*/
//  const myCrazyObject = {
//     someArray: [7, 9, {purpose: "путаница", number: 123 }, 3.3]
//  }
// const extraction = myCrazyObject. someArray[2].number;
// console.log(extraction)


/*
5) Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п. 
Тут вам пригодится метод Array.isArray()
*/

// function simpleObject(obj) {
//     return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
//   }

/*
6) Дан массив из имен например ['john', 'jane', 'kate', 'peter']. Вывести новый массив в котором каждая первая буква элемента будет с большой буквы.
*/

// const names = ['john', 'jane', 'kate', 'peter'];
// const newNames = names.map(str => str.charAt(0).toUpperCase() + str.slice(1));
// console.log(newNames)

/*
7) Сумма диапазона. Напишите функцию range, принимающую два аргумента, начало и конец диапазона, 
и возвращающую массив, который содержит все числа из него, включая начальное и конечное.
 Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму.
  Запустите указанную выше инструкцию и убедитесь, что она возвращает сумму значений массива.
*/

// function range (start, and) {
//     let arr = []
//     for(let i = start; i <= and; i++) {
//         arr.push(i)
//     }
//     return arr
// }

// function sum ( arrNumber) {
//     let result = 0;
//     for(let number of arrNumber) {
//         result += number
//     }
//     return result
// }

// let numbers = range(1, 10)
// let sumNumbers = sum(numbers)
// console.log(sumNumbers)

/*
8) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, 
запишите результаты округления в объект с ключами 'floor' и 'ceil'.
 Можете все оформить в функцию, которая на входе будет принимать число и на выходе отдавать объект
*/

// function squareRoot (number) {
//     const sqrt = Math.sqrt(number)
//     const result = {
//         floor: Math.floor(sqrt),
//         ceil: Math.ceil(sqrt)
//     }
//     return result
// }
// const number = 587;
// const result = squareRoot(number)
// console.log(result)


/*
9) Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. 
С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'. 
Для работы понадобится for...in
*/
// const obj = {
//     Минск: 'Беларусь',
//     Москва: 'Россия',
//     Киев: 'Украина'
// }
// for(const key in obj) {
//     console.log(`${key} - это ${obj[key]}.`)
// }
