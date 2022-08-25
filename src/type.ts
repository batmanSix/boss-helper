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
 export const hello = (str: string) => `hello ${str}`

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
export const helloUpperCase = (str: string) => `hello ${str}`.toLocaleUpperCase()
