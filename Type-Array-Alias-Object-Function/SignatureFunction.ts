// // FUNCTION SIGNATURE

// let greet: Function
// greet = () => {
//     console.log('Hello Trung Kien')
// }
// greet()

// let greetContinue: (a: string, b: string) => void
// greetContinue = (name: string, hobby: string) => {  
//     console.log(`${name} has hobby is ${hobby}`)
// }
// greetContinue('Nguyen Kien', 'Football')

// let calculate: (a: number, b: number, c: string) => number
// calculate = (numOne: number, numTwo: number, action: string) => (action === 'add' ? numOne + numTwo : numOne - numTwo)
// // Type Script phân biệt chữ viết hoa chữ viết thường
// console.log(calculate(10,20,'add'))
// console.log(calculate(100,200,'Add'))
// console.log(calculate(10,20,'minus'))

// type Student = { name: string; age: number } // => Lưu ý Student không phải là kiểu dữ liệu object
// let showStudent: (student: Student) => void
// showStudent = ({name, age}: Student) => {
//     console.log(`${name} is ${age} years old`)
// }
// showStudent({name: 'Trung Kien', age: 30})

// const user = {
//     name: 'Gia Linh',
//     age: 22,
//     gender: 'Girl',
//     phone: '0123456789'
// }
// showStudent(user)