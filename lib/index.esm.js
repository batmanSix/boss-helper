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
/**
* 返回 helloUpperCase 开头的字符串
* @param str - input string
* @returns 'HELLO xxx' 的大写
* @example
* ```ts
* hello('ts') => 'HELLO TS'
* ```
*
* @beta
*/

var helloUpperCase = function helloUpperCase(str) {
  return "hello ".concat(str).toLocaleUpperCase();
};

export { hello, helloUpperCase };
