"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeList = /** @class */ (function () {
    function EmployeeList() {
        this.employeeList = [];
    }
    EmployeeList.prototype.getAllEmployee = function () {
        return this.employeeList;
    };
    EmployeeList.prototype.getEmployee = function (employee) {
        for (var i = 0; i < this.employeeList.length; i++) {
            if (this.employeeList[i].id === employee.id) {
                return this.employeeList[i];
            }
        }
    };
    EmployeeList.prototype.addEmployee = function (employee) {
        if (employee) {
            this.employeeList.push(employee);
        }
    };
    EmployeeList.prototype.removeEmployee = function (employee) {
        for (var i = 0; i < this.employeeList.length; i++) {
            if (this.employeeList[i].id === employee.id) {
                this.employeeList.splice(i, 1);
            }
        }
    };
    EmployeeList.prototype.removeAllEmployee = function () {
        if (this.employeeList.length > 0) {
            this.employeeList = [];
        }
    };
    return EmployeeList;
}());
exports.default = EmployeeList;
