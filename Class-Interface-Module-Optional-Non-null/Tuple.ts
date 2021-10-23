const arr = ['Trung Kien',32,false]
arr[0] = 22
arr[1] = 'Phong My'
arr[2] = 50
console.log(arr)
// Vì trong mảng arr chấp nhận các kiểu dữ liệu như boolean, string, number và nó không ràng buộc thứ tự các phần tử trong arr nên ta 
// có thể thay thế giá trị trong mảng mà không cần quan tâm đến vị trí

//  TUPLE => Quy định kiểu dữ liệu của phần tử theo thứ tự ở từng vị trí trong mảng
const tuple: [string, boolean, number] = ['Trung Kien', true, 22]
const student: [string, number] = ['Phuong My',22]

console.log(tuple)
console.log(student)