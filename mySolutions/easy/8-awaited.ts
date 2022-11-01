/*
  189 - Awaited
  -------
  by Maciej Sikora (@maciejsikora) #easy #promise #built-in
  
  ### Question
  
  If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?
  
  For example: if we have `Promise<ExampleType>` how to get ExampleType?
  
  ```ts
  type ExampleType = Promise<string>
  
  type Result = MyAwaited<ExampleType> // string
  ```
  
  > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)
  
  > View on GitHub: https://tsch.js.org/189
*/

/* _____________ Your Code Here _____________ */

/**
 * T extends Promise<any> to ensure MyAwaited only accept Promise types
 * The first condition is just to infer the Return type
 * Second condition is to check if a recurtion should be made or just return the inferes Return type
 */
type MyAwaited<T extends Promise<any>> = T extends Promise<infer Return>
  ? Return extends Promise<any>
    ? MyAwaited<Return>
    : Return
  : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../../utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>
]

// @ts-expect-error
type error = MyAwaited<number>

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/189/answer
  > View solutions: https://tsch.js.org/189/solutions
  > More Challenges: https://tsch.js.org
*/
