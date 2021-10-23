// GENERICS

type strArray = Array<string>
type numberArray = Array<number>

const last = (arr: Array<number>) => arr[arr.length - 1]        
// => Chỉ chấp nhận đầu vào là 1 mảng array với kiểu dữ liệu là number

const l1 = last([1,2,3])
console.log(l1)

// ------------------------------------------------------------------------------------------------------------------------------------------------

const lastAdvanced = (arr: Array<any>) => arr[arr.length - 1]   
// => Chấp nhận đầu vào là 1 mảng array với bất kì kiểu dữ liệu nào

const l2 = lastAdvanced([10,20,30])
console.log(l2)

const l3 = lastAdvanced(['a','b','c'])
console.log(l3)

// Hạn chế của Array<any> là bất cứ kiểu dữ liệu nào trả về đều là kiểu any hết

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Nếu chúng ta không biết, hoặc không chắc chắn sẽ truyền kiểu dữ liệu nào vào mảng nhưng ta muốn biết kết quả trả về của là kiểu dữ 
// liệu là gì thì sẽ dùng đến Generic

// Thường khi dùng Generic người ta sẽ để là <T> (T lại có nghĩa là tuple). Ta có thể thay thế chữ T bằng bất cứ chữ nào ta muốn
// Nếu <T> nhận vào string thì array này sẽ là string, và tương tự với các kiểu dữ liệu khác

// GENERIC kiểu mảng
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]

const l4 = lastT([10,20,30])
console.log(l4)

const l5 = lastT(['a','b','c'])
console.log(l5)

const l6 = lastT([true, false, true, true])
console.log(l6)

// ------------------------------------------------------------------------------------------------------------------------------------------------

const makeArr = (x: string | number) => [x]

const x = makeArr('NTK')
console.log(x)

// GENERIC kiểu biến
const makeArrT = <T>(x: T) => [x]

const y = makeArrT(true)
console.log(y)

const makeArrXY = <X,Y>(x: X, y: Y) => [x,y]

const demo1 = makeArrXY(11,22)
console.log(demo1)

const demo2 = makeArrXY("abc","xyz")
console.log(demo2)

const demo3 = makeArrXY("abc",100)
console.log(demo3)

const makeTuple = <X,Y>(x: X, y: Y) : [X,Y] => [x,y]  

const dm1 = makeTuple(10,20)
console.log(dm1)

const dm2 = makeTuple("abc","xyz")
console.log(dm2)

const dm3 = makeTuple<string, number>("NTK",22)
console.log(dm3)

const dm4 = makeTuple<string | null, number>(null,100)
console.log(dm4)

const makeupWidthDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x,y]

const dm5 = makeupWidthDefault<string>('abc',100)
console.log(dm5)