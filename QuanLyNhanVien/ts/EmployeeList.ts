import Employee  from './Employee';

class EmployeeList{

    public employeeList: Employee[] = [];

    constructor(){

    }

    public getAllEmployee(): Employee[] {
        return this.employeeList;
    }

    public getEmployee(employee: Employee): any {
        for(let i = 0; i < this.employeeList.length; i++){
            if(this.employeeList[i].id === employee.id){
                return this.employeeList[i];
            }
        }
    }

    public addEmployee(employee: Employee): void {
        if(employee){
            this.employeeList.push(employee);
        }
    }

    public removeEmployee(employee: Employee): void {
        for(let i = 0; i < this.employeeList.length; i++){
            if(this.employeeList[i].id === employee.id){
                this.employeeList.splice(i,1);
            }
        }
    }

    public removeAllEmployee(): void {
        if(this.employeeList.length > 0){
            this.employeeList = [];
        }
    }
}

export default EmployeeList;