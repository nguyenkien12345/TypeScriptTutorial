// // EXPLICIT TYPES => Khai báo kiểu dữ liệu ngay từ đầu

// let firstName: string = 'My'
// let lastName: string = 'Ngo'
// let age: number = 20
// let isAuthentication: boolean = true

// firstName = 'Kien'
// lastName = 'Nguyen'
// age = 30
// isAuthentication = false

// console.log(firstName,lastName,age,isAuthentication)

// //Arrays
// let studentList: string[] = ['Kien', 'My', 'Mi', 'Nhi'] // => Chỉ chấp nhận kiểu đầu vào là mảng có kiểu dữ liệu là string 
// studentList.push('Long', 'Duc', 'An', 'Duong')
// console.log(studentList)

// //Union
// let mixed: (string | number | boolean)[]                // => Chỉ chấp nhận kiểu đầu vào là mảng có kiểu dữ liệu là string, number, boolean 
// mixed = ['Gia Linh', 10, true]
// mixed.push('Hoai Thuong', 20, false)
// console.log(mixed)

// let hobby: 'book' | 'music' | 'cook'
// hobby = 'book'
// //hobby = 'football' => Chỉ chấp nhận những giá trị được khai báo trong hobby không cho phép thêm hay ghi đè 

// //Objects
// let person: object
// person = {
//     name: 'Trung Kien',
//     age: 30,
//     isStudent: true,
// }
