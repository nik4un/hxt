// ========= Деструктивное присваивание ===========
// //  Я:
// const getCarsCountByYear = (arr) => {
//   const fun = ({ year }) => year;
//   return arr.reduce((acc, element) =>
//     ({ ...acc, [fun(element)]: ([fun(element)] in acc) ? acc[fun(element)] + 1 : 1 }), {});
// };
// // Учитель:
// const getCarsCountByYear = (cars) => {
//   const iter = (items, acc) => {
//     if (items.length === 0) {
//       return acc;
//     }
//     const [{ year }, ...rest] = items;
//     const newValue = acc[year] ? acc[year] + 1 : 1;
//     return iter(rest, { ...acc, [year]: newValue });
//   };
//   return iter(cars, {});
// };
// const cars = [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ];
//
// console.log(getCarsCountByYear(cars));
// //  {
// //    2010: 1,
// //    2012: 1,
// //    2013: 1,
// //    2014: 2,
// //  };

// ========= Операция spread ===========
// const objectify = (arr, func) =>
//   arr.reduce((acc, element) => ({ ...acc, [func(element)]: element }), {});

// const cars = [
//   { brand: 'bmw', model: 'm3', year: 2013 },
//   { brand: 'opel', model: 'astra', year: 2014 },
//   { brand: 'honda', model: 'accent', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2013 },
//   { brand: 'kia', model: 'sportage', year: 2015 },
// ];
//
// console.log(objectify(cars, car => car.model));
//
// // {
// //   accent: { brand: 'honda', model: 'accent', year: 2014 },
// //   astra: { brand: 'opel', model: 'astra', year: 2014 },
// //   m3: { brand: 'bmw', model: 'm3', year: 2013 },
// //   rio: { brand: 'kia', model: 'rio', year: 2013 },
// //   sportage: { brand: 'kia', model: 'sportage', year: 2015 },
// // };

// ========= Операция rest ===========
// class Enumerable {
//   constructor(collection, operations) {
//     this.collection = collection;
//     this.operations = operations || [];
//   }
//
//   build(fn) {
//     return new Enumerable(this.collection.slice(), this.operations.concat(fn));
//   }
//
//   where(...conditions) {
//     const condFuns = conditions.map((condition) => {
//       if (typeof (condition) === 'function') {
//         return coll => coll.filter(condition);
//       }
//       const keys = Object.keys(condition);
//       return coll => coll.filter(rule => keys.every(key => condition[key] === rule[key]));
//     });
//     return this.build(condFuns);
//   }
//
//   get length() {
//     return this.toArray().length;
//   }
//
//   toArray() {
//     if (!this.memo) {
//       this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
//     }
//
//     return this.memo;
//   }
// }

// ========= getter и мемоизация ===========
// class Enumerable {
//   constructor(collection, operations) {
//     this.collection = collection;
//     this.operations = operations || [];
//   }
//
//   build(fn) {
//     return new Enumerable(this.collection.slice(), this.operations.concat(fn));
//   }
//
//   select(fn) {
//     return this.build(coll => coll.map(fn));
//   }
//
//   orderBy(fn, direction = 'asc') {
//     const comparator = (a, b) => {
//       const a1 = fn(a);
//       const b1 = fn(b);
//
//       const compareResult = direction === 'asc' ? 1 : -1;
//
//       if (a1 > b1) {
//         return compareResult;
//       } else if (a1 < b1) {
//         return -compareResult;
//       }
//
//       return 0;
//     };
//     return this.build(coll => coll.sort(comparator));
//   }
//
//   where(fn) {
//     return this.build(coll => coll.filter(fn));
//   }
//
//   get length() {
//     return this.toArray().length;
//   }
//
//   toArray() {
//     if (!this.memo) {
//       this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
//     }
//
//     return this.memo.slice();
//   }
// }

// ========= Ленивые вычисления ===========
// class Enumerable {
//   constructor(collection, operations) {
//     this.collection = collection;
//     this.operations = operations || [];
//   }
//
//   build(fn) {
//     return new Enumerable(this.collection.slice(), this.operations.concat(fn));
//   }
//
//   select(fn) {
//     return this.build(coll => coll.map(fn));
//   }
//
//   where(fn) {
//     return this.build(coll => coll.filter(fn));
//   }
//
//   orderBy(fn, direction = 'asc') {
//     const compare = (a, b) => {
//       const a1 = fn(a);
//       const b1 = fn(b);
//
//       const compareResult = direction === 'asc' ? -1 : 1;
//
//       if (b1 > a1) {
//         return compareResult;
//       } else if (b1 < a1) {
//         return -compareResult;
//       }
//       return 0;
//     };
//     return this.build(coll => coll.sort(compare));
//   }
//
//   toArray() {
//     const result = this.operations.reduce((acc, func) => func(acc), this.collection);
//     console.log(result);
//     return result;
//   }
// }

// ========= Неизменяемость ===========
// class Enumerable {
//   constructor(collection) {
//     this.collection = collection;
//   }
//
//   select(fn) {
//     const mapped = this.collection.map(fn);
//     return new Enumerable(mapped);
//   }
//
//   orderBy(fn, direction = 'asc') {
//     const compare = (a, b) => {
//       const a1 = fn(a);
//       const b1 = fn(b);
//
//       const compareResult = direction === 'asc' ? -1 : 1;
//
//       if (b1 > a1) {
//         return compareResult;
//       } else if (b1 < a1) {
//         return -compareResult;
//       }
//       return 0;
//     };
//     const clone = this.collection.slice();
//     clone.sort(compare);
//
//     return new Enumerable(clone);
//   }
//
//   where(fn) {
//     const filtered = this.collection.filter(fn);
//     return new Enumerable(filtered);
//   }
//
//   toArray() {
//     return this.collection;
//   }
// }

// ========= Fluent interface ===========
// class Enumerable {
//   constructor(collection) {
//     this.collection = collection;
//   }
//
//   select(fn) {
//     this.collection = this.collection.map(fn);
//     return this;
//   }
//   orderBy(fn, direction = 'asc') {
//     const compare = (a, b) => {
//       const a1 = fn(a);
//       const b1 = fn(b);
//
//       const compareResult = direction === 'asc' ? -1 : 1;
//
//       if (b1 > a1) {
//         return compareResult;
//       } else if (b1 < a1) {
//         return -compareResult;
//       }
//       return 0;
//     };
//     this.collection = this.collection.sort(compare);
//     return this;
//   }
//
//   where(fn) {
//     this.collection = this.collection.filter(fn);
//     return this;
//   }
//
//   toArray() {
//     return this.collection.slice();
//   }
// }
//
// const cars = [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ];
// coll = new Enumerable(cars);
// // [car] => [model]
// const result = coll.select(car => car.model);  //  ['m5', 'm4', 'sorento', 'rio', 'sportage']

// ========= Set ===========
// const difference = (set1, set2) =>
//   Set(Array.from(set1).filter(value => !set2.has(value)));
//
// difference(new Set([2, 1]), new Set([2, 3])); // → [1]

// ========= Map ===========
// const wordsCount = (words, stopWords) =>
//   words.map(word => word.toLowerCase())
//     .filter(word => !stopWords.includes(word))
//     .reduce((acc, word) => {
//       if (!acc.has(word)) {
//         return acc.set(word, 1);
//       }
//       return acc.set(word, acc.get(word) + 1);
//     }, new Map());
// const stopWords = ['and', 'or', 'a', 'the', ''];
// const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
// wordsCount(words, stopWords); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]

// ========= Массив ===========
// const uniq = coll => coll.reduce((acc, value) =>
//   (acc.includes(value) ? acc : acc.concat(value)), []);
// uniq([2, 1, 2, 3]); // [2, 1, 3]
