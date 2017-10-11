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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var AddEmployeeService = /** @class */ (function () {
    function AddEmployeeService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        //creating the WebApi Url for Employee
        this.getEmployeeUrl = 'http://localhost:64612/Employee/GetEmployee';
        this.getAllEmployeesUrl = 'http://localhost:64612/Employee/GetEmployees';
        this.addEmployeeUrl = 'http://localhost:64612/Employee/AddEmployee';
        this.getDepartmentUrl = 'http://localhost:64612/Employee/GetDepartment';
        this.getDesignationUrl = 'http://localhost:64612/Employee/GetDesignation';
        this.getTechnologyUrl = 'http://localhost:64612/Employee/GetTechnology';
    }
    AddEmployeeService.prototype.getTechnology = function () {
        var url = "" + this.getTechnologyUrl;
        return this.http.get(url)
            .map(function (resposne) { return resposne.json(); });
    };
    AddEmployeeService.prototype.getDepartment = function () {
        var url = "" + this.getDepartmentUrl;
        return this.http.get(url)
            .map(function (response) { return response.json(); });
    };
    AddEmployeeService.prototype.getDesignation = function (id) {
        var url = this.getDesignationUrl + "/" + id;
        return this.http.get(url)
            .map(function (response) { return response.json(); });
    };
    AddEmployeeService.prototype.addEmployee = function (empData) {
        var url = "" + this.addEmployeeUrl;
        return this.http
            .post(url, empData, { headers: this.headers });
    };
    AddEmployeeService.prototype.getEmployee = function (id) {
        var url = this.getEmployeeUrl + "/" + id;
        return this.http.get(url)
            .map(function (response) { return response.json(); });
    };
    AddEmployeeService.prototype.getAllEmployees = function () {
        var url = "" + this.getAllEmployeesUrl;
        return this.http.get(url)
            .map(function (response) { return response.json(); });
    };
    AddEmployeeService.prototype.handleError = function (error) {
        alert("Error has been occured");
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AddEmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AddEmployeeService);
    return AddEmployeeService;
}());
exports.AddEmployeeService = AddEmployeeService;
//# sourceMappingURL=add-employee.service.js.map