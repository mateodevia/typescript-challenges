/*
  7 - Readonly
  -------
  by Anthony Fu (@antfu) #easy #built-in #readonly #object-keys
  
  ### Question
  
  Implement the built-in `Readonly<T>` generic without using it.
  
  Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
  
  For example:
  
  ```ts
  interface Todo {
    title: string
    description: string
  }
  
  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }
  
  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```
  
  > View on GitHub: https://tsch.js.org/7
*/

/* _____________ Your Code Here _____________ */

/**
 * T is an object type
 * keyof T is a union type. The union of all keys of T
 * MyReadonly is an object type with all the keys of T but with the added readonly property.
 */
type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../../utils'

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/7/answer
  > View solutions: https://tsch.js.org/7/solutions
  > More Challenges: https://tsch.js.org
*/
