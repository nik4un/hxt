'use strict';

var _hexletPairsData = require('hexlet-pairs-data');

// ================ Выравнивание ===============
// Учитель:
var flatten = function flatten(list) {
  var func = function func(element, acc) {
    return (0, _hexletPairsData.isList)(element) ? (0, _hexletPairsData.reduce)(func, acc, element) : (0, _hexletPairsData.cons)(element, acc);
  };
  return (0, _hexletPairsData.reverse)((0, _hexletPairsData.reduce)(func, (0, _hexletPairsData.l)(), list));
}; // eslint-disable-next-line

var list1 = (0, _hexletPairsData.l)(); // ()
var list2 = (0, _hexletPairsData.l)(1, 2, (0, _hexletPairsData.l)(3, 5), (0, _hexletPairsData.l)((0, _hexletPairsData.l)(4, 3), 2)); // ((1, 2, 3, 5, 4, 3, 2)
var list3 = (0, _hexletPairsData.l)((0, _hexletPairsData.l)(1, (0, _hexletPairsData.l)(5), (0, _hexletPairsData.l)(), (0, _hexletPairsData.l)((0, _hexletPairsData.l)(-3, 'hi'))), 'string', 10, (0, _hexletPairsData.l)((0, _hexletPairsData.l)((0, _hexletPairsData.l)(5)))); // (1, 5, -3, hi, string, 10, 5)
var list4 = (0, _hexletPairsData.l)(-1, 0, 1, -3, 10, -2); // (-1, 1, -3)
var result = flatten(list1);
console.log((0, _hexletPairsData.toString)(result));