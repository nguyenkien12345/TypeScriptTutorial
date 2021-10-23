// OPTIONAL AND NON NULL

// OPTIONAL: Tham số không bắt buộc
// NON NULL: Tham số nhất định sẽ được truyền vào còn nếu không được truyền vào nó sẽ trả về NaN/Undefined

// ? có nghĩa là tham số có cũng được không cũng không sao. 
// ! có nghĩa là tham số nhất định sẽ được truyền vào (Còn nếu không được truyền vào nó sẽ trả về NaN)

const add = (a: number, b?: number) => b ? a + b: a 
console.log(add(10,20))
console.log(add(20))

const minus = (a: number, b?: number) => a - b!
console.log(minus(10,20))
console.log(minus(20))