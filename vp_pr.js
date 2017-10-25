// === Введение в программирование ===
// ============= практика ============

// ========= Без двух нулей ===========
// const withoutTwoZeros = (a, b) => {
//   if (a > b + 1) {
//     return 0;
//   } else if (a === 0 || b === 0) {
//     return 1;
//   }
//   return withoutTwoZeros(a, b - 1) + withoutTwoZeros(a - 1, b - 1);
// };
// export default withoutTwoZeros; without


//  ========= + Фасад ===========
// import cube from './numbers1';
// import multi from './numbers2';
// import {pow2 as pow, sub2 as sub, sum2 as sum} from './numbers2';
// import sqrt from './numbers3';
// export {pow, sum, sub, sqrt, multi};
// export default cube;

// ============= Найди Fizz и Buzz ============
// const fizzBuzz = (begin, end) => {
//   if (begin > end) {
//     return;
//   }
//   for (let i = begin; i <= end; i += 1) {
//     if (((i % 3) === 0) && ((i % 5) === 0)) {
//       console.log('FizzBuzz');
//     } else if ((i % 5) === 0) {
//       console.log('Buzz');
//     } else if ((i % 3) === 0) {
//       console.log('Fizz');
//     } else {
//       console.log(i);
//     }
//   }
// };
// export default fizzBuzz;

// ====== + Степень тройки ==========
// const isPowerOfThree = num => (num < 3 ? num === 1 : isPowerOfThree(num / 3));

// ====== + Счастливые числа ==========
// const sumDigits = (num) => {
//   const strNum = String(Math.abs(num));
//   let result = 0;
//   for (let i = 0; i < strNum.length; i += 1) {
//     result += strNum[i] * strNum[i];
//   }
//   return Number(result);
// };
// const isHappyNumber = (num) => {
//   let newNum;
//   if (typeof num === 'string') {
//     newNum = Number(num);
//   }
//   newNum = Math.abs(num);
//   for (let i = 0; i < 10; i += 1) {
//     newNum = sumDigits(newNum);
//     if (newNum === 1) {
//       return true;
//     }
//   }
//   return false;
// };
// export default isHappyNumber;

// ============= + Преобразование DNA в RNA ============
// const dnaToRna = (dna) => {
//   if (typeof dna !== 'string') {
//     return null;
//   }
//   if (dna === '') {
//     return '';
//   }
//   let rna = '';
//   for (let i = 0; i < dna.length; i += 1) {
//     switch (dna[i]) {
//       case 'G':
//         rna = `${rna}C`;
//         break;
//       case 'C':
//         rna = `${rna}G`;
//         break;
//       case 'T':
//         rna = `${rna}A`;
//         break;
//       case 'A':
//         rna = `${rna}U`;
//         break;
//       default:
//         return null;
//     }
//   }
//   return rna;
// };
// export default dnaToRna;

// ============= + Форматированное время ============
// const formattedTime = (timeInMinutes) => {
//   if (timeInMinutes < 0) {
//     return null;
//   }
//   let hour = String(Math.floor(timeInMinutes / 60));
//   let minutes = String(timeInMinutes % 60);
//   if (hour.length === 1) {
//     hour = `0${hour}`;
//   }
//   if (minutes.length === 1) {
//     minutes = `0${minutes}`;
//   }
//   return `${hour}:${minutes}`;
// };
// export default formattedTime;

// + ============= Переворот числа ============
// const reverseInt = (num) => {
//   if (num === 0) return 0;
//   if (num === (-1 * 0)) return 0;
//   const absNum = Math.abs(num);
//   const signNum = num / absNum;
//   if ((absNum % 1) !== 0) {
//     return NaN; // Должно использоваться целое!
//   }
//   let revStr = '';
//   const strNum = String(absNum);
//   for (let i = strNum.length - 1; i >= 0; i -= 1) {
//     revStr = `${revStr}${strNum[i]}`;
//   }
//   return signNum * Number(revStr);
// };
// export default reverseInt;

// ============= + Сумма квадратов ============
// const square = n => (n * n);
// const sumSquare = (num) => {
//   let result = 0;
//   for (let i = 1; i <= num; i += 1) {
//     result += square(i);
//   }
//   return result;
// };
// const squareSum = (num) => {
//   let result = 0;
//   for (let i = 1; i <= num; i += 1) {
//     result += i;
//   }
//   return square(result);
// };
// const sumSquareDifference = num => Math.abs(sumSquare(num) - squareSum(num));
// export default sumSquareDifference;

// ====== Функция Аккермана ==========
// const ackermann = (m, n) => {
//   if ((m < 0) || (n < 0)) {
//     return undefined;
//   }
//   if (m === 0) {
//     return n + 1;
//   }
//   if (m > 0) {
//     if ((n === 0) && (m > 0)) {
//       return ackermann((m - 1), 1);
//     }
//   }
//   return ackermann((m - 1), ackermann(m, (n - 1)));
// };
// export default ackermann;
// console.log(ackermann(3, 4));

// + ======= Переворот строки (рекурсия) ==========
// const reverse = (str) => {
//   if (str === '') {
//     return str;
//   }
//   if (str.length === 1) {
//     return str[0];
//   }
//   return `${str[str.length - 1]}${reverse(str.substr(0, (str.length - 1)))}`;
// };
// export default reverse;
// document.write(reverse('1234'));

// ======= + Идеальные числа ==========
// const isPerfect = (num) => {
//   if ((num % 1 !== 0) || num <= 0) {
//     return false; // Должно использоваться целое положительное число!
//   }
//   let sumDdivider = 0;
//   for (let i = 1; i < num; i += 1) {
//     if ((num % i) === 0) {
//       sumDdivider += i;
//     }
//   }
//   if (sumDdivider === num) {
//     return true;
//   } return false;
// };
// export default isPerfect;
// document.write(isPerfect(0));

// ======= Счастливый билет ==========
// const isHappyTicket = (num) => {
//   const str = String(num);
//   if (Number.isNaN(Number(str))) { // Проверка: введеное значение - это число?
//     return false;
//   }
//   if (str.length % 2 !== 0) {
//     return false;
//   }
//   let sumL = 0;
//   let sumR = 0;
//   for (let i = 0; i < str.length / 2; i += 1) {
//     sumL += Number(str[i]);
//     sumR += Number(str[str.length - 1 - i]);
//   }
//   if (sumL === sumR) {
//     return true;
//   }
//   return false;
// };
// export default isHappyTicket;

// ====== + Разница углов ==========
// const diff = (a, b) => {
//   const dif = Math.abs(a - b);
//   if (dif >= 180) return Math.abs(360 - dif);
//   return dif;
// };
// export default diff;
// console.log(diff(-190, 190));

// + ====== Инвертированный регистр ==========
// const invertCase = (str) => {
//   const upStr = str.toUpperCase();
//   const loStr = str.toLowerCase();
//   let invertStr = '';
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === upStr[i]) {
//       invertStr += loStr[i];
//     } else {
//       invertStr += upStr[i];
//     }
//   }
//   return invertStr;
// };
// export default invertCase;
// console.log(invertCase('I loVe   JS  _'));
