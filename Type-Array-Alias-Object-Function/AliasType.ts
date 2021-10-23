// // TYPE ALIAS => Kiểu dữ liệu người dùng tự định nghĩa

// type StringOrNumber = string | number

// type Student = {
//     id: StringOrNumber
//     name: string
// }
// // Lưu ý Kiểu dữ liệu của Student không phải là obj

// var studentDetails = (id: StringOrNumber, name: string): void => {
//     console.log(`Student ${name} has id: ${id}`)
// }
// studentDetails(123, 'Nguyen Trung Kien')
// studentDetails(789, 'Gia Linh')

// var great = (user: Student): void => {
//     console.log(`Hello  ${user.name} has id: ${user.id}`)
// }
// great({id: 123, name: 'Nguyen Trung Kien'})