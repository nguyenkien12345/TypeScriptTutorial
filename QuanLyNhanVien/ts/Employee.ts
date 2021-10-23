class Employee{

    public id: number = 0;
    public name: string = '';
    public age: number = 0;
    public salary: number = 0;
    public type: number = 0;

    constructor(id: number, name: string, age: number, salary: number, type: number){
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.type = type;
    }

    public getTypeEmployee(): string {
        switch(this.type){
            case 1: return "Nhân viên thường";
            case 2: return "Quản lý";
            case 3: return "Sếp";
            default: return "Nhân viên thường"
        }
    }

    public caculateSalary(): number {
        let sumSalary: number = 0;
        switch(this.type){
            case 1:
                sumSalary = this.salary;
                break;
            case 2:
                sumSalary = this.salary * 1.5;
                break;
            case 3:
                sumSalary = this.salary * 3;
                break;
            default:
                sumSalary = this.salary;
                break;
        }
        return sumSalary;
    }
}

export default Employee;