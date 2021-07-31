/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
 */

// function anagram(str1, str2) {
//   if (str1.toLowerCase() !== str2.toLowerCase()) {
//     if (
//       str1.toLowerCase().split('').sort().join('') ===
//       str2.toLowerCase().split('').sort().join('')
//     )
//       return true;
//   }
//   return false;
// }

function anagram(str1, str2) {
  if (
    str1.toLowerCase() !== str2.toLowerCase() &&
    str1.toLowerCase().split('').sort().join('') ===
      str2.toLowerCase().split('').sort().join('')
  )
    return true;
  return false;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

anagram('finder', 'Friend');
console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
