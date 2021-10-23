"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = __importDefault(require("./Employee"));
var EmployeeList_1 = __importDefault(require("./EmployeeList"));
var employeeManagement = new EmployeeList_1.default();
var handleAddEmployee = function () {
    var id = parseInt(document.getElementById("id").value);
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var salary = parseFloat(document.getElementById("salary").value);
    // Lấy dữ liệu trong radio
    var type = 1;
    var radioType = document.getElementsByName("type");
    for (var _i = 0, radioType_1 = radioType; _i < radioType_1.length; _i++) {
        var radioChecked = radioType_1[_i];
        if (radioChecked.checked) {
            type = parseInt(radioChecked.value);
        }
    }
    var employee = new Employee_1.default(id, name, age, salary, type);
    employeeManagement.addEmployee(employee);
    reset();
    renderEmployeeList();
};
var reset = function () {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("salary").value = "";
};
var handleDeleteAllEmployee = function () {
    employeeManagement.removeAllEmployee();
    renderEmployeeList();
};
var createEleTD = function (className, value) {
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    return td;
};
var renderEmployeeList = function () {
    var tbody = document.getElementById("list_employee");
    tbody.innerHTML = "";
    if (employeeManagement.employeeList.length > 0) {
        for (var _i = 0, _a = employeeManagement.employeeList; _i < _a.length; _i++) {
            var person = _a[_i];
            var tdId = createEleTD("MaNV", person.id);
            var tdName = createEleTD("TenNV", person.name);
            var tdAge = createEleTD("TuoiNV", person.age);
            var tdSalary = createEleTD("LuongNV", person.salary);
            var tdType = createEleTD("LoaiNV", person.getTypeEmployee());
            var tdSumSalary = createEleTD("TongLuong", person.caculateSalary());
            var tDeletebtn = createEleTD("btnXoa", "Xoá");
            var tr = document.createElement("tr");
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
    else {
        var none = "<div>Vui lòng thêm nhân viên vào danh sách</div>";
        tbody.innerHTML = none;
    }
};
renderEmployeeList();
document.getElementById("btnAddEmployee").addEventListener("click", handleAddEmployee);
document.getElementById("btnDeleteAllEmployee").addEventListener("click", handleDeleteAllEmployee);
