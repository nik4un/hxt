
import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data';
// ================ Иерархические структуры ===============
// Учитель:
const zip = (list1, list2) => {
  const iter = (first, last, acc) => {
    if (isEmpty(first) || isEmpty(last)) {
      return acc;
    }

    const newAcc = cons(l(head(first), head(last)), acc);
    return iter(tail(first), tail(last), newAcc);
  };

  return reverse(iter(list1, list2, l()));
};
const list1 = l(1, 5, 3, 8, 9);
const list2 = l(2, 3, 2, 1);

const result = zip(list1, list2);
console.log(`set2: ${listToString(result)}`);

// Количество листьев
// const tree = l(l(1, 2), l(3, l(4, 5)), 6);
// const countElements = tree => {
// if (!isList(tree)) {
// return 1;
// }
// if (isEmpty(tree)) {
// return 0;
// }
// return countElements(head(tree)) + countElements(tail(tree));
// };

// Я:
// const select = (tagName, html) => {
//   const func = (element, acc) => {
//     const accChild = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
//     return is(tagName, element) ? consList(element, accChild) : accChild;
//   }
//   return reduce(func, l(), html);
// };

// Учитель:
// const select = (tagName, html) => reduce((element, acc) => {
//   const acc2 = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
//   return is(tagName, element) ? consList(element, acc2) : acc2;
// }, l(), html);
