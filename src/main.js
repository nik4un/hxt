// eslint-disable-next-line
import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons, reduce } from 'hexlet-pairs-data';

// ================ Выравнивание ===============
// Учитель:
const flatten = (list) => {
  const func = (element, acc) => (isList(element) ? reduce(func, acc, element) : cons(element, acc));
  return reverse(reduce(func, l(), list));
};
const list1 = l(); // ()
const list2 = l(1, 2, l(3, 5), l(l(4, 3), 2)); // ((1, 2, 3, 5, 4, 3, 2)
const list3 = l(l(1, l(5), l(), l(l(-3, 'hi'))), 'string', 10, l(l(l(5)))); // (1, 5, -3, hi, string, 10, 5)
const list4 = l(-1, 0, 1, -3, 10, -2); // (-1, 1, -3)
const result = flatten(list1);
console.log(listToString(result));
