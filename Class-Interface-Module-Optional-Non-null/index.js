// GENERICS
var last = function (arr) { return arr[arr.length - 1]; };
// => Chỉ chấp nhận đầu vào là 1 mảng array với kiểu dữ liệu là number
var l1 = last([1, 2, 3]);
console.log(l1);
// ------------------------------------------------------------------------------------------------------------------------------------------------
var lastAdvanced = function (arr) { return arr[arr.length - 1]; };
// => Chấp nhận đầu vào là 1 mảng array với bất kì kiểu dữ liệu nào
var l2 = lastAdvanced([10, 20, 30]);
console.log(l2);
var l3 = lastAdvanced(['a', 'b', 'c']);
console.log(l3);
// Hạn chế của Array<any> là bất cứ kiểu dữ liệu nào trả về đều là kiểu any hết
// ------------------------------------------------------------------------------------------------------------------------------------------------
// Nếu chúng ta không biết, hoặc không chắc chắn sẽ truyền kiểu dữ liệu nào vào mảng nhưng ta muốn biết kết quả trả về của là kiểu dữ 
// liệu là gì thì sẽ dùng đến Generic
// Thường khi dùng Generic người ta sẽ để là <T> (T lại có nghĩa là tuple). Ta có thể thay thế chữ T bằng bất cứ chữ nào ta muốn
// Nếu <T> nhận vào string thì array này sẽ là string, và tương tự với các kiểu dữ liệu khác
// GENERIC kiểu mảng
var lastT = function (arr) { return arr[arr.length - 1]; };
var l4 = lastT([10, 20, 30]);
console.log(l4);
var l5 = lastT(['a', 'b', 'c']);
console.log(l5);
var l6 = lastT([true, false, true, true]);
console.log(l6);
// ------------------------------------------------------------------------------------------------------------------------------------------------
var makeArr = function (x) { return [x]; };
var x = makeArr('NTK');
console.log(x);
// GENERIC kiểu biến
var makeArrT = function (x) { return [x]; };
var y = makeArrT(true);
console.log(y);
var makeArrXY = function (x, y) { return [x, y]; };
var demo1 = makeArrXY(11, 22);
console.log(demo1);
var demo2 = makeArrXY("abc", "xyz");
console.log(demo2);
var demo3 = makeArrXY("abc", 100);
console.log(demo3);
var makeTuple = function (x, y) { return [x, y]; };
var dm1 = makeTuple(10, 20);
console.log(dm1);
var dm2 = makeTuple("abc", "xyz");
console.log(dm2);
var dm3 = makeTuple("NTK", 22);
console.log(dm3);
var dm4 = makeTuple(null, 100);
console.log(dm4);
var makeupWidthDefault = function (x, y) { return [x, y]; };
var dm5 = makeupWidthDefault('abc', 100);
console.log(dm5);
