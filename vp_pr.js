// === Введение в программирование ===
// ============= практика ============

// ======= Счастливый билет ==========
// const isHappyTicket = num => {
//   let str = String(num);
//   if (isNaN(+str)) {
//     alert("Это не число!");
//   }
//   if (str.length % 2 !== 0) {
//     alert("Должно быть четное количество цифр");
//   }
//   let sumL = 0;
//   let sumR = 0;
//   for (i = 0; i < str.length / 2; i++) {
//     sumL += Number(str[i]);
//     sumR += Number(str[str.length - 1 - i]);
//     console.log(sumL + ' & ' + sumR);
//   }
//   if (sumL === sumR) {
//     return true;
//   } else {
//     return false;
//   }
// }
// export default isHappyTicket;
// let ddd = isHappyTicket(231002);
// console.log(ddd);

// ====== Разница углов ==========
// const diff = (a, b) => {
//   if (a < 0) a = -a;
//   if (b < 0) b = -b;
//   let dif = Math.abs(a - b);
//   if (dif >= 180) return 360 - dif;
//   return dif;
// }
// console.log(diff(-30, -300));

// ====== Инвертированный регистр ==========
// const invertCase = (str) => {
//  const upStr = str.toUpperCase();
//  const loStr = str.toLowerCase();
//  let invertStr = '';
//  for (var i = 0; i < str.length; i++) {
//    if (str[i] === upStr[i]) {
//      invertStr = invertStr + loStr[i];
//    } else {
//      invertStr = invertStr + upStr[i];
//    }
//  }
//  return invertStr;
// }
//
// invertCase('I loVe   JS  _');
// export default invertCase;
