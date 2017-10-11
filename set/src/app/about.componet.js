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
var ng2_completer_1 = require("ng2-completer");
var About_1 = require("./models/About");
var SearchCriteria_1 = require("./models/SearchCriteria");
var add_employee_service_1 = require("./services/add-employee.service");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(employeeService, completerService) {
        this.employeeService = employeeService;
        this.completerService = completerService;
        this.getEmployeesByName = 'http://localhost:64612/Employee/GetEmployeesByName';
        this.aboutObj = new About_1.About();
        this.configurationObj = new SearchCriteria_1.SearchCriteria();
    }
    AboutComponent.prototype.getEmployee = function (id) {
        var _this = this;
        this.aboutObj.ErrorMessage = undefined;
        this.employeeService.getEmployee(id)
            .subscribe(function (resEmpData) { return _this.aboutObj.EmpData = resEmpData; }, function (error) { return _this.aboutObj.ErrorMessage = error; });
    };
    /**
     *
     * @param item
     */
    AboutComponent.prototype.onSelected = function (item) {
        this.aboutObj.EmpData = item.originalObject;
    };
    /**
    checking the behavoiur of checkbox and setting the url as the param passing.
     * /
     * @param name
     */
    AboutComponent.prototype.checkBoxChecked = function (name) {
        if (name === "id") {
            if (this.configurationObj.ById == false) {
                this.configurationObj.ById = true;
            }
            else {
                this.configurationObj.ByName = false;
                this.configurationObj.ByDepartment = false;
                this.configurationObj.ByDesignation = false;
            }
        }
        if (name === "name") {
            this.configurationObj.PlaceholderValue = "Search By Name";
            if (this.configurationObj.ByName == false) {
                this.configurationObj.ById = true;
            }
            else {
                this.configurationObj.ById = false;
                this.configurationObj.ByDepartment = false;
                this.configurationObj.ByDesignation = false;
            }
            var url = this.getEmployeesByName + "?" + name + "=";
            this.remoteData = this.completerService.remote(url, 'EmployeeName', 'EmployeeName');
        }
        if (name === "department") {
            this.configurationObj.PlaceholderValue = "Search By Department";
            if (this.configurationObj.ByDepartment == false) {
                this.configurationObj.ById = true;
            }
            else {
                this.configurationObj.ByName = false;
                this.configurationObj.ById = false;
                this.configurationObj.ByDesignation = false;
            }
            var url = this.getEmployeesByName + "?" + name + "=";
            this.remoteData = this.completerService.remote(url, 'DepartmentName', 'EmployeeName');
        }
        if (name === "designation") {
            this.configurationObj.PlaceholderValue = "Search by Designation";
            if (this.configurationObj.ByDesignation == false) {
                this.configurationObj.ById = true;
            }
            else {
                this.configurationObj.ByName = false;
                this.configurationObj.ById = false;
                this.configurationObj.ByDepartment = false;
            }
            var url = this.getEmployeesByName + "?" + name + "=";
            this.remoteData = this.completerService.remote(url, 'DesginationName', 'EmployeeName');
        }
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: './html/About.html'
        }),
        __metadata("design:paramtypes", [add_employee_service_1.AddEmployeeService, ng2_completer_1.CompleterService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.componet.js.map