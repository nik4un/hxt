// @flow

import 'source-map-support/register';

import { cons, car, cdr, toString as toStr } from './hexlet-pairs';

type Point = Point;
type Quadrant = 1 | 2 | 3 | 4;

/**
 * Make a point
 * @example
 * const point = makePoint(4, 5);
 */
export const makePoint = (x: Number, y: Number): Point => cons(x, y);

/**
 * Get X
 * @example
 * const point = makePoint(4, 5);
 * getX(point); // 4
 */
export const getX = (point: Point): number => car(point);

/**
 * Get Y
 * @example
 * const point = makePoint(8, -2);
 * getY(point); // -2
 */
export const getY = (point: Point): number => cdr(point);

/**
 * Convert point to string
 * @example
 * const point = makePoint(0, 10);
 * toString(point); // (0, 10)
 */
export const toString = (point: Point): string => toStr(point);

/**
 * Determine quadrant for given point
 * @example
 * quadrant(makePoint(5, 0)); // null
 * quadrant(makePoint(1, 5)); // 1
 * quadrant(makePoint(-3, 10)); // 2
 */
export const quadrant = (point: Point): ?Quadrant => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};
