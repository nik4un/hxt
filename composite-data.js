// ========= Пары без функций ===========
// export const cons = (a, b) => (2 ** a * 3 ** b);
// export const car = pair => {
//   let num = pair;
//   let left = 0;
//   while (num % 2 === 0) {
//     num = num / 2;
//     left += 1;
//   }
//   return left;
// };
// export const cdr = pair => {
//   let num = pair;
//   let right = 0;
//   while (num % 3 === 0) {
//     num = num / 3;
//     right += 1;
//   }
//   return right;
// };

// ============= Рациональные числа ============
// export const make = (numer, denom) => {
//   let num = numer;
//   let den = denom;
//   let min;
//   let maxDivisor;
//   const modNum = Math.abs(num);
//   const modDen = Math.abs(den);
//   if (denom < 0) {
//     num = -1 * num;
//     den = -1 * den;
//   }
//   if (modNum <= modDen) {
//     min = modNum;
//   } else {
//     min = modDen;
//   }
//   for (let i = 1; i <= min; i += 1) {
//     if ((modNum % i) === 0 && (modDen % i) === 0) {
//       maxDivisor = i;
//     }
//   }
//   return cons ((num / maxDivisor), (den / maxDivisor));
// };
// export const numer = pair => car(pair);
// export const denom = pair => cdr(pair);
// export const toString = pair => `${numer(pair)} / ${denom(pair)}`;
// export const isEqual = (pair1, pair2) => {
//   return (numer(pair1) === numer(pair2) && denom(pair1) === denom(pair2));
//   };
// export const add = (pair1, pair2) => {
//   return cons(((numer(pair1) * denom(pair2) + denom(pair1) * numer(pair2))), (denom(pair1) * denom(pair2)));
// };
// export const sub = (pair1, pair2) => {
//   return cons(((numer(pair1) * denom(pair2) - denom(pair1) * numer(pair2))), (denom(pair1) * denom(pair2)));
// };
// export const mul = (pair1, pair2) => {
//   return cons(((numer(pair1) *  numer(pair2))), (denom(pair1) * denom(pair2)));
// };
// export const div = (pair1, pair2) => {
//   return cons(((numer(pair1) * denom(pair2))), (numer(pair2) * denom(pair1)));
// };
// ============= Сооздание пары и селекторов ============
// const cons = (x, y) => f => f(x, y);
// const car = fun => fun((a, b) => a);
// const cdr = fun => fun((a, b) => b);
// const pair1 = cons(10, 100);
// console.log(String(car(pair1)));
// console.log(String(cdr(pair1)));

// ============= Rectangle ============
// export const makeRectangle = (point, width, height) => cons(point, cons(width, height));
//
// export const startPoint = rectangle => car(rectangle);
// export const height = rectangle => cdr(cdr(rectangle));
// export const width = rectangle => car(cdr(rectangle));
//
// export const square = rectangle => height(rectangle) * width(rectangle);
// export const perimeter = rectangle => 2 * (height(rectangle) + width(rectangle));
//
// export const containsTheOrigin = (rectangle) => {
//   const point1 = startPoint(rectangle);
//   const point2 = makePoint(getX(point1) + width(rectangle), getY(point1) - height(rectangle));
//
//   return quadrant(point1) === 2 && quadrant(point2) === 4;
// };
// ============= Segment ============
// export const startSegment = segment => car(segment);
// export const makeSegment = (point1, point2) => cons(point1, point2);
// export const endSegment = segment => cdr(segment);
// export const midpointSegment = segment => cons(((car(startSegment(segment)) + car(endSegment(segment))) / 2), ((cdr(startSegment(segment)) + cdr(endSegment(segment))) / 2));
// export const segmentToString = segment => {
//   const left = car(segment);
//     const right = cdr(segment);
//     return `[${pointToString(left)}, ${pointToString(right)}]`;
// };

// ============= findPrimitiveBox ============
// const findPrimitiveBox = (pair) => {
//   const first = car(pair);
//   const last = cdr(pair);
//   if (!isPair(first) && !isPair(last)) {
//     return pair;
//   }
//   const next = isPair(first) ? first : last;
//   return findPrimitiveBox(next);
// };
// export default findPrimitiveBox;

// ============= quadrant, symmetricalPoint, distance ============
// import { makePoint, getX, getY } from './hexlet-points'; // eslint-disable-line
// export const quadrant = (point) => {
//   const x = getX(point);
//   const y = getY(point);
//   if (x === 0 || y === 0) return null;
//   if (x > 0 && y > 0) return 1;
//   if (x < 0 && y > 0) return 2;
//   if (x < 0 && y < 0) return 3;
//   return 4;
// };
// export const symmetricalPoint = point => makePoint(-getX(point), -getY(point));
// export const distance = (point1, point2) => {
//   const x1 = getX(point1);
//   const x2 = getX(point2);
//   const y1 = getY(point1);
//   const y2 = getY(point2);
//   return Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
// };
