/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #easy #infer #tuple #built-in
  
  ### Question
  
  Implement the built-in Parameters<T> generic without using it.
  
  For example:
  
  ```ts
  const foo = (arg1: string, arg2: number): void => {}
  
  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
  ```
  
  > View on GitHub: https://tsch.js.org/3312
*/

/* _____________ Your Code Here _____________ */

/**
 * T extends a function with arguments
 * We use the extends conditional to infer the type of the args
 * If T is a function it returns the infered type, othrwise it returns never
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer Args
) => any
  ? Args
  : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../../utils'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3312/answer
  > View solutions: https://tsch.js.org/3312/solutions
  > More Challenges: https://tsch.js.org
*/
