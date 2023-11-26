#### Question 1: What are some benefits of using TypeScript over JavaScript in a project?

Ans: The benefit of using typescript over javascript are:

- Debugging and testing becomes easier.
- Scalable and maintainable.
- Easier to catch type related errors.
- Typescript is suitable for large and complex projects because it helps manage and scale the project more effectively.
- It improves code quality and readability.

#### Question 2: What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each.

Ans: The optional chaining (?.) and nullish coalescing (??) operators in TypeScript are used to work with null or undefined values.

- Optional Chaining (?.) checks whether the object accessed or function called is undefind or null. If it is undefind or null, then the output evaluates to undefined instead of throwing an error.
- For example:

```
  const person = {
  name: 'raees',
  city: {
  name: 'ctg',
  },
  };
  const personName = person.dog?.name;
  console.log(personName); Expected output: undefined
```

- nullish coalescing (??) provides default value if there is null or undefined values. It returns the right side operand if the left side operand is null or undefined.
- For example:

```
const isloggedIn = null;
const result1 = isloggedIn ?? 'Guest'
const result2 = isloggedIn ? isloggedIn : 'Guest'
console.log({result1}, {result2})
```

Result1 output is 'Guest' because isloggedIn is null (or undefined). if loggedin is null then the result1 and result2 is set to default value which is 'Guest'. We know that nullish coalescing returns the right side operand if the left side operand is null or undefined so if isloggedIn is null then it returns 'Guest'

#### Question 3: How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.

Ans: We can handle asynchronous operations in TypeScript using callbacks, Promises, and async/await. The advantages of using async/await over callbacks or Promises are:

- async/await makes asynchronous code work like synchronous code which makes it more convenient to read and understand.
- Error handling is easier with the help of 'try/catch' block.
- Eliminates callbaclk hell.
- Debugging is more easier.
- 'async' function implicitely returns promises, so we can use '.then()' and '.catch()' if needed.

#### Question 4: How can you use TypeScript's enums, and what are their advantages?.

Ans: TypeScript's enums allows you to define a set of named constants. It makes it easier to document intent, or create a set of distinct cases. It provides both numeric and string based enums. The advantage of using Typescript's enums are:

- Enums provides more descriptive way to define constants making the code easier to read.
- It helps in maintaing the code which helps to edit the values of constants.
- It provides type safety which ensures variables can be only assigned to the values from enum.

- For example:

```
// Numeric enums
enum Direction {
Up = 1,
Down,
Left,
Right,
}

const rightSide = Direction.Right;
if(rightSide === Direction.Right){
console.log('Look at your right side')
}
```

```
// String enum
enum Direction {
Up = "UP",
Down = "DOWN",
Left = "LEFT",
Right = "RIGHT",
}

const facing = Direction.Right;

if (facing === Direction.Right) {
console.log('Look to your right');
}
```

#### Question 5: Explain the role of type guards in TypeScript and provide an example of a custom type guard.

Ans: Type gaurds helps you narrow down the type of variable at runtime. It is useful when dealing with union types, because union types can have multiple possible types. It also ensures type safety and improves code readability by explicitele checking and asserting the type of a varaible.

- For example:

```
function isString(value: any): value is string {
  return typeof value === 'string';
}

if (isString(value)) {
  console.log('Value is a string:', value); // Treat `value` as a string
} else {
  console.log('Value is a number:', value); // Treat `value` as a number
}
```

#### Question 6: Can you give an example of how to use "readonly" properties in TypeScript?

Ans:

```
class Person {
  readonly name: string;
  readonly mobileNumber: number;

  constructor(name: string, mobileNumber: number) {
    this.name = name;
    this.mobileNumber = mobileNumber;
  }

  changeNumber(newNumber: number){
    this.mobileNumber =  newNumber; // Returns error because cannot change the number of readonly property
  }
}

const person = new Person('Masud', 01245212);

console.log(person.name); // Output: Masud
console.log(person.mobileNumber); // Output: 01245212
```

#### Question 7: Explain what a union type is in TypeScript and provide an example of its usage.

Ans: Union type in TypeScript is a type that can have more than one possible types. This helps you to declare different values of different type. For example, a variable type of string|number can have either a string or number value.

- For Example

```
const formatStringNumber = (value: string | number): string => {
    if (typeof value === 'string') {
      return value.toUpperCase();
    } else {
      return value.toFixed(2);
    }
  }

const resultString =  formatStringNumber("Next level web development")
const resultNumber  = formatStringNumber(12.2812)
console.log(resultString) // Output: NEXT LEVEL WEB DEVELOPMENT
console.log(resultNumber) // Output: 12.28

```
