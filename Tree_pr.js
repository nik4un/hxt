// ========= * ===========
// ========= Массив как объект ===========
// Я:
// const convert = (arr) => {
//   const func = (acc, item) => {
//     const [f, s] = item;
//     if (Array.isArray(s)) {
//       return { ...acc, [f]: convert(s) };
//     }
//     return { ...acc, [f]: s };
//   };
//   return arr.reduce(func, {});
// };
// Учитель:
// const convert = items => items.reduce((acc, [key, value]) =>
//   ({ ...acc, [key]: value instanceof Array ? convert(value) : value }), {});

// convert([]); // => {}
// convert([['key', 'value']]); // { key: 'value' }
// convert([['key', 'value'], ['key2', 'value2']]); // { key: 'value', key2: 'value2' }
// convert([
// ['key', [['key2', 'anotherValue']]],
// ['key2', 'value2']
// ]); // { key: { key2: 'anotherValue' }, key2: 'value2' }
