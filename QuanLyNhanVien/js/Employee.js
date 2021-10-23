"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(id, name, age, salary, type) {
        this.id = 0;
        this.name = '';
        this.age = 0;
        this.salary = 0;
        this.type = 0;
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.type = type;
    }
    Employee.prototype.getTypeEmployee = function () {
        switch (this.type) {
            case 1: return "Nhân viên thường";
            case 2: return "Quản lý";
            case 3: return "Sếp";
            default: return "Nhân viên thường";
        }
    };
    Employee.prototype.caculateSalary = function () {
        var sumSalary = 0;
        switch (this.type) {
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
    };
    return Employee;
}());
exports.default = Employee;
