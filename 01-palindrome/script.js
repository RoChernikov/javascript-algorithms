/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 *
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 *
 */

//--+++++++Решение без бонуса+++++++--
function palindrome(str) {
  const splitArr = str.split('').reverse().join('').toLowerCase();
  if (str.toLowerCase() === splitArr) {
    return true;
  }
  return false;
}

//--+++++++Решение с бонусом+++++++--
// function palindrome(str) {
//   const splitArr = str
//     .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, '')
//     .split('')
//     .reverse()
//     .join('')
//     .toLowerCase();
//   if (
//     str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, '').toLowerCase() === splitArr
//   ) {
//     return true;
//   }
//   return false;
// }

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
console.log(palindrome('О, лета тело!')); // true - раскомментировать решение с бонусом

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 *
 * palindrome('О, лета тело!'); // true
 *
 */
