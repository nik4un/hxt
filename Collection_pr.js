// ========= Сборщик строки запроса ===========
// // Я:
// const buildQueryString = (list) => {
//   const keys = Object.keys(list).sort();
//   return keys.reduce((acc, key) => [...acc, `${key}=${list[key]}`], []).join('&');
// };
// // Учитель:
// export default (params) => {
//   const keys = Object.keys(params);
//   keys.sort();
//   return keys.map(k => `${k}=${params[k]}`).join('&');
// };
// const q1 = buildQueryString({}); // → ''
// const q2 = buildQueryString({ page: 1 }); // → 'page=1'
// const q3 = buildQueryString({ per: 10, page: 1 }); // → 'page=1&per=10''
// const q4 = buildQueryString({ a: 10, s: 'Wow', d: 3.2, z: '89', }); // → 'a=10&d=3.2&s=Wow&z=89'

// ========= Чанкование ===========
// Я:
// const chunk = (arr, num) => {
//   let l = arr.length;
//   const result = [];
//   while (l >= num && l !== 0) {
//     result.push(arr.splice(0, num));
//     l -= num;
//   }
//   if (l > 0) {
//     result.push(arr);
//   }
//   return result;
// };
// Учитель:
// const chunk = (coll, size) => {
//   const iter = (iterColl, acc = []) => {
//     if (iterColl.length === 0) {
//       return acc;
//     }
//     return iter(
//       iterColl.slice(size),
//       [...acc, iterColl.slice(0, size)],
//     );
//   };
//   return iter(coll);
// };

// const q1 = chunk(['a', 'b', 'c', 'd'], 2); // → [['a', 'b'], ['c', 'd']]
// const q2 = chunk(['a', 'b', 'c', 'd'], 3); // → [['a', 'b', 'c'], ['d']]
// const q3 = chunk([], 4); // → []
// const q4 = chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2); // → [['a', 'b'], ['c', 'd'], ['e', 'f']]
// const q5 = chunk(['a'], 2); // → [['a']]

// ========= Уплотнение коллекции  ===========
// //Я:
// const compact = (arr) =>
//   arr.filter((element) => (element) ? true : false);
// //  Учитель:
// const compact = array =>
//   array.filter(value => !!value);
// compact([0, 1, false, 2, '', 3]);  // → [1, 2, 3]

// ========= Нечетное количество ===========
// Я:
// const findOdd = (arr) => {
//   const map = arr.reduce((acc, element) =>
//     (acc.set(element, (acc.has(element) ? acc.get(element) + 1 : 1))), new Map());
//   let result;
//   map.forEach((value, key) => {
//     if (value % 2 !== 0) {
//       result = key;
//     }
//   });
//   return result;
// };
// // Учитель:
// export default arr => arr.reduce((acc, num) => acc ^ num, 0);
//
// const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];
// findOdd(numbers); // 5

// ========= Пересечение массивов ===========
//  Я:
// const intersection = (arr1, arr2) => {
//   const set = new Set(arr2);
//   return arr1.filter(value => set.has(value));
// };
// //  Учитель:
// const intersection = (array1, array2) =>
//   array1.filter(value => array2.includes(value));
//
// intersection([2, 1], [2, 3]);  // → [2]
// ========= Найди отличия ===========
// const difference = (arr1, arr2) => {
//   const set = new Set(arr2);
//   return arr1.filter(value => !set.has(value));
// };

// ========= Исключаем лишних ===========
// const without = (arr, ...rest) => {
//   const set = new Set(rest);
//   return arr.filter(value => !set.has(value));
// };
// without([2, 1, 2, 3], 1, 2, 5);  // → [3]

// ========= Представление объекта в виде массива  ===========
// //  Я:
// const fromPairs = arr =>
//   arr.reduce((acc, element) => ({ ...acc, [element[0]]: element[1] }), {});
// //  Учитель:
// const fromPairs = pairs =>
//   pairs.reduce((acc, [key, value]) => ({ [key]: value, ...acc }), {});
//
// fromPairs([['fred', 30], ['barney', 40]]);  // → { 'fred': 30, 'barney': 40 }
