// // ARRAY AND OBJECTS

// // ARRAY

// var names = ['Kien','My','Nhi','Long','Duc'] // => Lúc này ta đã định dạng kiểu dữ liệu của names là 1 mảng string
// names.push('Son','Hao','Huy', 'Hello' )
// console.log(names)

// var numbers = [1, 2, 3, 4, 5]               // => Lúc này ta đã định dạng kiểu dữ liệu của numbers là 1 mảng number
// numbers.push(6, 7, 8)
// console.log(numbers)

// var mixed = [1, 'Kien', false, {id: 1, name: 'Alo'}, [4,5,6]]                                                                                   // => Lúc này ta đã định dạng kiểu dữ liệu của mixed là 1 mảng bao gồm các kiểu dữ liệu number, string, boolean, object, array
// mixed.push('Nhi' ,10 , true, {id: 1, name: 'What'},  [7,8,9])
// console.log(mixed)

// // OBJECTS

// var person = {
//     name: 'Trung Kien',
//     age: 22,
//     isStudent: true
// }

// // Thay đổi thuộc tính trong person

// // Cách 1: 
// person.name = 'Phong My',
// person.age  = 21,
// person.isStudent = false,
// //person.hobby = 'Football' // => Không thể thêm dữ liệu bằng cách truy cập đến thuộc tính trong TypeScript
// console.log(person)

// // Cách 2: Cách này có một nhược điểm so với cách 1 là cách 1 chỉ cần truy cập đến thuộc tính muốn thay đổi và gán giá trị mới, còn cách 2 thì 
// // phải gọi toàn bộ thuộc tính đang có ra, ta muốn thay đổi giá trị của thuộc tính nào thì gán giá trị mới cho thuộc tính đó, còn những thuộc
// // tính mà ta không muốn gán giá trị mới thì gán lại giá trị cũ cho những thuộc tính đó
// person = {
//     name: 'Gia Linh',
//     age: 23,
//     isStudent: true,
//     // //hobby = 'Football' // => Không thể thêm dữ liệu bằng cách truy cập đến thuộc tính trong TypeScript
// }
// console.log(person)
