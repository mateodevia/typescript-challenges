/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in
  
  ### Question
  
  Implement the built-in Exclude<T, U>
  
  > Exclude from T those types that are assignable to U
  
  For example:
  
  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```
  
  > View on GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */

/**
 * T is a union type (Ex. 'a' | 'b' | 'c')
 * Conditional types always distribute over unions so
 * T extends U ? never : T
 * =
 * ('a' | 'b' | 'c' extends 'a' ? never : 'a' | 'b' | 'c') -> Instanciating the example
 * =
 * ('a' extends 'a' ? never : 'a') | ('b' extends 'a' ? never : 'b') | ('c' extends 'a' ? never : 'c') -> Aplying distributative property
 * =
 * (never) | ('b') | ('c') -> exaluating the conditions
 * = 'b' | 'c' -> Because never is always droped on unions
 */
type MyExclude<T, U> = T extends U ? never : T

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/
