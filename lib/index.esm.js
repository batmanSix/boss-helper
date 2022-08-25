/**
 * 返回 hello 开头的字符串
 * @param str - input string
 * @returns 'hello xxx'
 * @example
 * ```ts
 * hello('ts') => 'hello ts'
 * ```
 *
 * @beta
 */
var hello = function hello(str) {
  return "hello ".concat(str);
};

export { hello };
