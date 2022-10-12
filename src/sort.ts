/**
* 返回 比较函数
* @param str - input string number
* @returns a > b || b < a
* @example
* ```ts
* let arr = [2,1] => [1,2]
* ```
*
* @beta
*/
export const compare = (p: string | number) => (m: { [x: string]: number; }, n: { [x: string]: number; }) => n[p] - m[p]
