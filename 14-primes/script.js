/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
 */

// function primes(num) {
//   const primesArr = [];

//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       primesArr.push(i);
//     }
//   }
//   return primesArr;
// }

// function isPrime(num) {
//   for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
//     if (num % i === 0) return false;
//   }
//   return num > 1;
// }

//---+++++Решение решетом+++++---
function primes(num) {
  const primesArr = [];
  const seive = [];
  for (let i = 2; i <= num; i++) {
    if (!seive[i]) {
      primesArr.push(i);
      for (let j = i * i; j <= num; j += i) {
        seive[j] = true;
      }
    }
  }
  return primesArr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
