import { Parser } from 'expr-eval';

export default {
  eq: (v1, v2) => v1 === v2,
  ne: (v1, v2) => v1 !== v2,
  lt: (v1, v2) => v1 < v2,
  gt: (v1, v2) => v1 > v2,
  lte: (v1, v2) => v1 <= v2,
  gte: (v1, v2) => v1 >= v2,
  and() {
    return Array.prototype.every.call(arguments, Boolean);
  },
  or() {
    return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
  },
  eval: (expression, ...args) => {
    const variables = {};
    args.forEach((arg, index) => {variables['var' + (index + 1)] = arg});
    return Parser.evaluate(expression, variables);
  },
  revert: (array) => {
    return Array.isArray(array) ? array.reverse() : array;
  }
};
