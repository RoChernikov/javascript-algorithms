/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  str = str
    .split(' ')
    .map((element) => {
      if (element !== '') {
        element = element[0].toUpperCase() + element.slice(1);
      }
      return element;
    })
    .join(' ');
  return str;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
