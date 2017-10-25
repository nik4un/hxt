// ================ Иерархические структуры ===============
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

// =========== Стандартные интерфейсы =============
// export const extractHeaders = list => {
//   const h2List = filter(item => is('h2', item), list);
//   return map(item => node('p', value(item)), h2List);
// };
// export const wordsCount = (tagName, word, elements) => {
//   const filtered = filter(element => is(tagName, element), elements);
//   const values = map(element => value(element), filtered);
//   return reduce((text, acc) => wc(word, text) + acc, 0, values);
// };

// =================== Свертка ==================
// Учитель:
// export const reduce = (func, acc, elements) => {
//   const iter = (items, result) => {
//     if (isEmpty(items)) {
//       return result;
//     }
//     return iter(tail(items), func(head(items), result));
//   };
//   return iter(elements, acc);
// };

// export const emptyTagsCount = (tagName, elements) => {
//   const predicate = element => is(tagName, element) && value(element) === '';
//   const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
//   return reduce(func, 0, elements);
// };

// =================== Фильтрация списков ==================
// Я:
// export const filter = (func, elements) => {
//   if (isEmpty(elements)) {
//     return l();
//   }
//   const element = head(elements);
//   const tailElements = tail(elements);
//   if (func(element)) {
//     return cons(element, filter(func, tailElements));
//   }
//   return filter (func, tailElements);
// };
// export const quotes = (elements) => {
//   const quotesList = filter(pair => is('blockquote', pair), elements);
//   return map(value, quotesList);
//   };
// Учитель:
// export const filter = (func, elements) => {
//   const iter = (items, acc) => {
//     if (isEmpty(items)) {
//       return reverse(acc);
//     }
//     const item = head(items);
//     const newAcc = func(item) ? cons(item, acc) : acc;
//     return iter(tail(items), newAcc);
//   };
//
//   return iter(elements, l());
// };
//
// export const quotes = (elements) => {
//   const filtered = filter(element => is('blockquote', element), elements);
//   const result = map(value, filtered);
//   return result;
// };

// =================== Отображение списков ==================
// Я:
// export const map = (func, elements) => {
//   if (isEmpty(elements)) {
//     return l();
//   }
//   const newElement = func(head(elements));
//   return cons(newElement, map(func, tail(elements)));
// };
// export const mirror = elements => map(element =>
//   node(name(element), reverseStr(value(element))), elements);
// Учитель:
// Рекурсивный процесс
// export const map = (func, elements) => {
//   if (isEmpty(elements)) {
//     return l();
//   }
//   return cons(func(head(elements)), map(func, tail(elements)));
// };

// Итеративный процесс (рекурсивно)
// export const map = (func, elements) => {
//   if (isEmpty(elements)) {
//     return l();
//   }
//   const iter = (items, acc) => {
//     if (isEmpty(items)) {
//       return reverse(acc);
//     }
//     return iter(tail(items), cons(func(head(items)), acc));
//   };
//   return iter(elements, l());
// };

// export const mirror = elements =>
//   map(element => node(name(element), reverseStr(value(element))), elements);

// ========= Разметка ===========
// export const make = () => l();
// export const node = (teg, content) => cons(teg, content);
// export const name = pair => car(pair);
// export const value = pair => cdr(pair);
// export const append = (dom, tag) => consList(tag, dom);
// export const toString = list => {
//   if (isEmpty(list)) {
//     return '';
//   }
//   const block = head(list);
//   const tag = name(block);
//   const content = value(block);
//   return `${toString(tail(list))}<${tag}>${content}</${tag}>`;
// }

// ========= Представление последовательностей ===========
// export const has = (list, num) => {
//   if (isEmpty(list)) {
//     return false;
//   }
//   if (head(list) === num) {
//     return true;
//   }
//   return has(tail(list), num);
// };

// export const reverse = list => {
//   let newList = null;
//   let iter = list;
//   while (!isEmpty(iter)) {
//     newList = cons(head(iter), newList);
//     iter = tail(iter);
//   }
//   return newList;
// };

// export const reverse = (list) => {
//   const iter = (items, acc) =>
//     (isEmpty(items) ? acc : iter(tail(items), cons(head(items), acc)));
//   return iter(list, l());
// };

// export const concat = (list1, list2) => {
//   if (isEmpty(list1)) {
//     return list2;
//   }

//   return cons(head(list1), concat(tail(list1), list2));
// };
