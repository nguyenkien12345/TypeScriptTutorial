import Employee from './Employee';
import EmployeeList  from './EmployeeList';

var employeeManagement = new EmployeeList();

const handleAddEmployee = (): void => {
    let id: number = parseInt((<HTMLInputElement>document.getElementById("id")).value);
    let name: string = (<HTMLInputElement>document.getElementById("name")).value;
    let age: number = parseInt((<HTMLInputElement>document.getElementById("age")).value);
    let salary: number = parseFloat((<HTMLInputElement>document.getElementById("salary")).value);
    // Lấy dữ liệu trong radio
    let type: number = 1;
    let radioType: any = document.getElementsByName("type");
    for (let radioChecked of radioType){
        if(radioChecked.checked){
            type = parseInt(radioChecked.value);
        }
    }
    var employee = new Employee(id,name,age,salary,type);
    employeeManagement.addEmployee(employee);
    reset();
    renderEmployeeList();
}

const reset = (): void => {
    (<HTMLInputElement>document.getElementById("id")).value = "";
    (<HTMLInputElement>document.getElementById("name")).value = "";
    (<HTMLInputElement>document.getElementById("age")).value = "";
    (<HTMLInputElement>document.getElementById("salary")).value = "";
}

const handleDeleteAllEmployee = (): void => {
    employeeManagement.removeAllEmployee();
    renderEmployeeList();
}

const createEleTD = (className: string, value: any): any => {
    let td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    return td;
}

const renderEmployeeList = (): void => {
    let tbody: any = document.getElementById("list_employee");
    tbody.innerHTML = "";
    if(employeeManagement.employeeList.length > 0){
        for(let person of employeeManagement.employeeList){
            let tdId: any = createEleTD("MaNV",person.id);
            let tdName: any = createEleTD("TenNV",person.name);
            let tdAge: any = createEleTD("TuoiNV",person.age);
            let tdSalary: any = createEleTD("LuongNV",person.salary);
            let tdType: any = createEleTD("LoaiNV",person.getTypeEmployee());
            let tdSumSalary: any = createEleTD("TongLuong",person.caculateSalary());
            let tDeletebtn: any = createEleTD("btnXoa","Xoá")
    
            let tr: any = document.createElement("tr");
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdAge);
            tr.appendChild(tdSalary);
            tr.appendChild(tdType);
            tr.appendChild(tdSumSalary);
            tr.appendChild(tDeletebtn);
    
            tbody.appendChild(tr);
        }
    }
    else{
        var none = "<div>Vui lòng thêm nhân viên vào danh sách</div>"
        tbody.innerHTML = none;
    }

}

renderEmployeeList();

(<HTMLElement>document.getElementById("btnAddEmployee")).addEventListener("click",handleAddEmployee);
(<HTMLElement>document.getElementById("btnDeleteAllEmployee")).addEventListener("click",handleDeleteAllEmployee);