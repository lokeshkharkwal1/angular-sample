"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Employee_1 = require("./models/Employee");
var add_employee_service_1 = require("./services/add-employee.service");
var EmployeeComponent = /** @class */ (function () {
    //Constructor is used whenever we need to inject DI and proper initilization of fields in the class and subclass
    function EmployeeComponent(employeeService) {
        this.employeeService = employeeService;
        this.employeeListObj = new Employee_1.Employee();
    }
    //ngOnInit is called after the calling of Class Constructor is completed its is used where we need to get the component ready on page load.
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getting all employee data
        this.employeeService.getAllEmployees().subscribe(function (data) { return _this.employeeListObj.EmpDataList = data; }, function (error) { return _this.employeeListObj.Error = error; });
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: './html/Employee.html'
        }),
        __metadata("design:paramtypes", [add_employee_service_1.AddEmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.componet.js.map