// ========== Первые n элементов =============
// const take = (num, list) => {
//   if (num === 0 || isEmpty(list)) {
//     return l();
//   }
//   return cons(head(list), take(num - 1, tail(list)));
// };
// export default take;

// ================ Молния ===============
// Я:
// const zip = (list1, list2) => {
//   if (isEmpty(list1) || isEmpty(list2)) {
//     return l();
//   }
//   return cons(l(head(list1), head(list2)), zip(tail(list1), tail(list2)));
// };
// export default zip;

// Учитель:
// const zip = (list1, list2) => {
//   const iter = (first, last, acc) => {
//     if (isEmpty(first) || isEmpty(last)) {
//       return acc;
//     }
//     const newAcc = cons(l(head(first), head(last)), acc);
//     return iter(tail(first), tail(last), newAcc);
//   };
//   return reverse(iter(list1, list2, l()));
// };
// export default zip;
