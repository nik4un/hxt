// ============= Реализация if функцией ============
// export const If = bul => a => b => bul(a, b);
// export const True = (a, b) => a;
// export const False = (a, b) => b;
// console.log(If(True)('one')('two'));
// console.log(If(False)('one')('two'));
// 
// ============= Частичное применение ============
// const partialApply = (f, a) => b => f(a, b);
// const pow = (a, b) => a ** b;
// const f1 = partialApply(pow, 2);
// console.log(f1(10));

// export default partialApply;
// ============= flip ============
// const flip = f => (a, b) => f(b, a);
// export default flip;

// ============= apply ============
// const apply = (count, f, arg) => (count === 0 ? arg : f(apply(count - 1, f, arg)));
// export default apply;

// ============= buildHtml ============
// export default () => table(
//   tr(td('lang'), td('comment')),
//   tr(td('php'), td('statements')),
//   tr(td('clojure'), td('expressions')),
// );

// ============= substr ============
// const substr = (str, begin = 0, newLength = str.length) => {
//   let newStr = '';
//   let beginIndex = begin;
//   let size = newLength;
//   if (str === '' || newLength === 0 || begin >= str.length) return newStr;
//   if (begin < 0) {
//     beginIndex = 0;
//   }
//   if (newLength < 0) {
//     size = 1;
//   }
//   if ((begin + size) >= str.length) {
//     size = str.length - beginIndex;
//   }
//   for (let i = beginIndex; i < (size + beginIndex); i += 1) {
//     newStr = `${newStr}${str[i]}`;
//   }
//   return newStr;
// };
// export default substr;

// ============= Палиндром ============
// const reverse = (str) => {
//   if (str === '') {
//     return str;
//   }
//   if (str.length === 1) {
//     return str[0];
//   }
//   return `${str[str.length - 1]}${reverse(str.substr(0, (str.length - 1)))}`;
// };
// const isPalindrome = str => str === reverse(str);
// export default isPalindrome;
