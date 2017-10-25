// ===== Основы программирования =====
// ============== тесты ==============

// ====== nn ==========

// ====== Сравнение строк ==========
// const bigLettersCount = (str) => {
//   // BEGIN (write your solution here)
//   const upStr = str.toUpperCase();
//   let result = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === upStr[i]) result += 1;
//   }
//   return result;
//   // END
// };
// console.log(bigLettersCount('ASdf'));
//
//
// const compare = (first, second) => {
//   const firstCount = bigLettersCount(first);
//   const secondCount = bigLettersCount(second);
//
//   // BEGIN (write your solution here)
//   if (firstCount > secondCount) {
//     return 1;
//   } else if (firstCount < secondCount) {
//     return -1;
//   } else {
//     return 0;
//   }
//   // END
// };
// console.log(compare('aZ', 'Ad'));

// export const greaterThan = (first, second) =>
//   compare(first, second) === 1;
//
// export const lessThan = (first, second) =>
//   compare(first, second) === -1;
//
// export const isEqual = (first, second) =>
//   compare(first, second) === 0;

// ====== Функция calc ==========
// const calc = (op, a, b) => {
//   switch (op) {
//     case '+' : return a + b;
//     case '-' : return a - b;
//     case '*' : return a * b;
//     case '/' : return a / b;
//     case '%' : return a % b;
//     default : return NaN;
//   }
// }
// console.log(calc('/', 10, 5));

// ======  Переворот строки ==========
// const reverse = (str) => {
//   let result ='';
//    for (var i = 1; i <= str.length; i++) {
//     	result = `${result}${str[str.length - i]}`;
//     }
//   return result;
// }
// document.write('_' + reverse('12345') + '_');

// ====== Сумма натуральных чисел ==========
// const sum = (n, a, b) => {
//   if (((n % 1) !== 0) && ((n % 1) !== 0) && ((n % 1) !== 0)) {
//   alert ("Все числа должны быть натуральными!");
//   return false;
// }
// let result = 0;
//   for (let i = 1; i < n; i++) {
//   	if (((i % a) === 0) || ((i % b) === 0)) {
//   		result += i;
//   	}
//   }
//   return result;
// }
// console.log(sum(1, 4, 3));

// ============ Простое число ============
// const isPrime = (num) => {
//   if (num < 0) {
//     return false;
//   }
//   if ((num - (num^0)) !== 0) {
//     return false;
//   }
//   if ((num === 0) || (num === 1)) {
//     return false;
//   }
//   for (let counter = 2; counter < num; counter++) {
//     if ((num % counter) === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isPrime(5));

// ====== Наибольший общий делитель ==========
//  const gcd = (m, n) => {
//   let div;
//   if (m <= n) {
//     div = m;
//   } else {
//   div = n;
//   };
//   while (((m % div) !== 0) || ((n % div) !== 0)) {
//     div -= 1;
//   }
//   return div;
// };
// document.write(gcd(156, 228));

// ======== Минимальный делитель ========
// ================ цикл ================
// const smallestDivisor = (dividend) => {
//   let divisor;
//   if (dividend <= 0) {
//      return NaN;
//   }
//   else if (dividend === 1) {
//     divisor = 1;
//   } else
//   divisor = 2;
//   while ((dividend % divisor) !== 0) {
//     divisor = divisor + 1;
//   }
//   return  divisor;
// }

// export default smallestDivisor;

// ======== Минимальный делитель ========
// ============== рекурсия ==============
// const smallestDivisor = (num) => {
//   if (num === 1) return num;
//   const iter = (divisor, dividend) => {
//     if ((dividend % divisor) === 0) {
//       return divisor;
//     }
//     return iter(divisor + 1, num);
//   }
//   return iter(2, num);
// }
// export default smallestDivisor;

// // == Площадь треугольника ==
// const getRad = angle => Math.PI * angle / 180;
//
// const areaTriangle = (b, alfa, beta) => b * b * Math.sin(getRad(alfa)) * Math.sin(getRad(beta)) / (2 * Math.sin(getRad(180 - alfa - beta)));
// console.log(areaTriangle(10, 90, 30));
