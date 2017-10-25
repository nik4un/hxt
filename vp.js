// === Введение в программирование ===
// ============== тесты ==============

// ============== тесты ==============

// ==========  Делает заглавной первую букву каждого слова ===============
// const upCaseStartWorld = (n, sentence) =>{
//   if (n === 0) {
//     return sentence[n].toUpperCase() + sentence.substring(n + 1);
//   } else {
//     return sentence.substring(0, n) + sentence[n].toUpperCase() + sentence.substring(n + 1);
//   }
// };
//
// const solution = (str) => {
//   let upStr = str;
//   // return str[0].toUpperCase() + str.substring(1);
//   if (str[0] !==' ') {
//       upStr = upCaseStartWorld(0, str);
//     }
//
//   for (let i = 0; i < str.length; i++) {
//      if (str[i] === ' ') {
//       if (str[i + 1] !== ' ') {
//         upStr = upCaseStartWorld(i + 1, upStr);
//       }
//     }
//   }
//   return upStr;
// };

// export default solution;
// document.write(solution('  hello,   woRld!'));
// solution('hello, world!');


// ========== 17 ===============
// const addDigits = (num) => {
//   let str = String(num);
//   let result;
//   console.log(str.length);
//   if (str.length === 1) {
//     return num;
//   }
//   while (str.length > 1) {
//     result = 0;
//   for (let i = 0; i < str.length; i++) {
//     result += +str[i];
//   }
//   str = String(result);
//   console.log(str);
//   }
//   return result;
// };
// document.write(addDigits(10));
// ====== 12 ==========
// const isPrime = (num) => {
//   if (num < 0) {
//     return false;
//   }
//   if ((num - (num^0)) !== 0) {
//     // return num;
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
// document.write(isPrime(5));

// ====== 11 ==========
// const reverse = (str) => {
//   let i = 1;
//   let result ='';
//
//   while (i <= str.length) {
//     result = result + str[str.length - i];
//     i = i + 1;
//   }
//   return result;
// };
// document.write(reverse('123456'));


// ====== 10 ==========
// const smallestDivisor = dividend => {
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
// };

// document.write(smallestDivisor(121));

// ====== 9 ==========
// const smallestDivisor = (num) => {
//   const iter = (divisor, dividend) => {
// 		if ((dividend % divisor) === 0) {
// 			return divisor;
// 		}
// 		return iter (divisor + 1, dividend);
// 	}
// 	if (num === 1) {
// 		return num;
// 	}
// 	return iter (2, num);
//   // END
// };
// document.write(smallestDivisor(17));

// ====== 8 ==========
// const sequenceSum = (begin, end) => {
//   // BEGIN (write your solution here)
//   if (begin > end) {
//     return NaN;
//   } else  if (end === begin) {
//     return begin;
//   }
//   else {
//     return begin + sequenceSum (begin + 1, end);
//   }
//   // END
// };
//
// document.write(sequenceSum(2, 1));

// const square = num => num * num;
// const sumOfSquares = (arg1, arg2) => square(arg1) + square(arg2);
// const squareSumOfSquares = (num1, num2) => square(sumOfSquares(num1, num2));
// document.write(square(5) + '<br>');
// document.write(sumOfSquares(5, 10) + '<br>');
// document.write(squareSumOfSquares(2, 3));
