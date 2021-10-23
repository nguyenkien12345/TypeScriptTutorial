// CLASS 

// Cách 1
export class Employee {
    public Name: string      // => public cho phép bên ngoài class có thể truy cập cũng như thay đổi thuộc tính
    private Age: number      // => private không cho phép bên ngoài class có thể truy cập cũng như thay đổi thuộc tính
    readonly Male: boolean   // => readonly cho phép bên ngoài class có thể truy cập thuộc tính nhưng không cho thay đổi thuộc tính

    constructor(name: string, age: number, male: boolean){
        this.Name = name
        this.Age = age
        this.Male = male 
    }

    show = () => {
        console.log(`Student ${this.Name} is ${this.Age} years old. Gender is ${(this.Male ? 'Boy' : 'Girl')}`)
    }
}

const user1 = new Employee('Trung Kien',20,true)
user1.show()

const user2 = new Employee('Phong My',20,false)
user2.show()

let employees: Employee[] = []
employees.push(user1,user2)
employees.forEach(employee => {
    employee.show()
})

// Cách 2
export class Student{
    constructor(
        public Name: string,      
        private Age: number,    
        readonly Male: boolean 
    ){}

    show = () => {
        console.log(`Student ${this.Name} is ${this.Age} years old. Gender is ${(this.Male ? 'Boy' : 'Girl')}`)
    }
}

const std1 = new Student('Trung Kien',20,true)
// user1.show()

const std2 = new Student('Phong My',20,false)
// user2.show()

let students: Student[] = []
students.push(std1,std2)
students.forEach(student => {
    student.show()
})