                        //+++++ CHI TIẾT TYPESCRIPT +++++//
// Trong typescript khi khai báo biến phải khai báo kèm kiểu dữ liệu của nó
// let a: string;
// let b: number;
// let c: boolean;
// let d: any;
// let e: string[] = ['a','b','c'] 
// let g: undefined;
// let h: void;

// enum Color {
//     Red = 'red',
//     Green = 'green',
//     Blue = 'blue',
//     Yellow = 'yellow'
// }
// let red = Color.Red;

// TypeAssertion
// let a: string[] = []; 
//Lưu ý luôn luôn phải gán giá trị cho biến
// a.push("NTK2182928");
// console.log(a);

//Interface
// interface Point {
//     x: number;
//     y: number;
// }

class Point {
    private x: number;
    private y: number;

    constructor( x: number, y: number){
        this.x = x;
        this.y = y;
    }

drawPoint(){
    console.log(`Draw a point at X: ${this.x} and Y: ${this.y}`);
}

movePoint(){
    console.log(`Move a point at X: ${this.x} and Y: ${this.y}`);
}

getDistance(){
    console.log(`Get Distance a point at X: ${this.x} and Y: ${this.y}`);
}

}

let p = new Point(1,2);
p.drawPoint();
p.movePoint();
p.getDistance();