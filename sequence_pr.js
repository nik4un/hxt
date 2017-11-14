/* eslint-disable */
// ================ Выбор по селектору ===============
// Учитель:
// export const select = (query, html) => {
//   if (isEmpty(query)) {
//     return html;
//   }
//   const newHtml = reduce((element, acc) => {
//     if (is(head(query), element)) {
//       const childrenElements = hasChildren(element) ? children(element) : l();
//       const elements = isEmpty(tail(query)) ? l(element) : childrenElements;
//       return concat(elements, acc);
//     }
//     if (hasChildren(element)) {
//       return concat(select(query, children(element)), acc);
//     }
//     return acc;
//   }, l(), html);
//   return select(tail(query), newHtml);
// };
// Я:
// export const select = (query, dom) => {
//   const selectTagFromDom = (tagName, html) => reduce((element, acc) => {
//     const acc2 = hasChildren(element) ? concat(selectTagFromDom(tagName, children(element)), acc) : acc;
//     return is(tagName, element) ? concat(l(element), acc2) : acc2;
//   }, l(), html);
//   if (isEmpty(dom)) {
//     return l();
//   }
//   const teg = head(query);
//   const tailQuery = tail(query);
//   if (isEmpty(tailQuery)) {
//     return selectTagFromDom(teg, dom);
//   }
//   const newDom = filter(element => is(teg, element), dom);
//   const fun = (element, acc) => (hasChildren(element) ? concat(children(element), acc) : acc);
//   const listOfChild = reduce(fun, l(), newDom);
//   return select(tailQuery, listOfChild);
// };

// ================ Задача про ферзей ===============
// Я 1:
// const isSafeQueens = (placement) => {
//   let safeQueens = true; // безопастность ферзя
//   let queen = head(placement); // позиция ферзя
//   let battlefield = tail(placement); // проверяемое поле
//   const checkAttack = (el, col) => {
//     const underAttack = (el === queen || (el - col) === queen || (el + col) === queen);
//     if (underAttack) {
//       safeQueens = false;
//     }
//     return col + 1;
//   };
//   while (safeQueens) {
//     if (isEmpty(battlefield)) {
//       return true;
//     }
//     reduce(checkAttack, 1, battlefield);
//     queen = head(battlefield);
//     battlefield = tail(battlefield);
//   }
//   return safeQueens;
// };
// Я 2:
// const isSafeQueens = (placement) => {
//   if (isEmpty(placement)) {
//     return true;
//   }
//   const queen = head(placement); // позиция ферзя
//   const battlefield = tail(placement); // проверяемое поле
//   let safeQueens = true; // безопастность ферзя
//   const checkAttack = (el, col) => {
//     const underAttack = (el === queen || (el - col) === queen || (el + col) === queen);
//     if (underAttack) {
//       safeQueens = false;
//     }
//     return col + 1;
//   };
//   reduce(checkAttack, 1, battlefield);
//   if (safeQueens) {
//     return isSafeQueens(battlefield);
//   }
//   return safeQueens;
// };


// ================ Выравнивание ===============
// Учитель:
// const flatten = (list) => {
//   const removeList = (elements, accumulator) =>
//     reduce((element, acc) =>
//       (!isList(element) ? cons(element, acc) : removeList(element, acc)), accumulator, elements);
//   return reverse(removeList(list, l()));
// };
// Я:
// const flatten = (list) => {
//   const func = (element, acc) =>
//     (isList(element) ? reduce(func, acc, element) : cons(element, acc));
//   return reverse(reduce(func, l(), list));
// };
// ================ Одинаковая четность ===============
// const sameParity = (list) => {
//   if (isEmpty(list)) {
//     return l();
//   }
//   const parity = n => (n % 2 === 0);
//   return filter(n => (parity(n) === parity(head(list))), list);
// };
//  ================ Уникальное объединение ===============
// Я:
// const union = (list1, list2) => {
//   const func = (element, acc) => (has(acc, element) ? acc : cons(element, acc));
//   const one = reduce(func, l(), list1);
//   return reverse(reduce(func, one, list2));
// };
// export default union;

// Учитель:
// export default (list1, list2) => {
//   const appendUniq = (base, list) => {
//     const result = reduce((value, acc) =>
//       (has(acc, value) ? acc : cons(value, acc)),
//       reverse(base), list);
//     return reverse(result);
//   };
//   return appendUniq(appendUniq(l(), list1), list2);
// };

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
