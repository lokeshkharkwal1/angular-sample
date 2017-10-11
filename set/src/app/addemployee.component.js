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
var AddEmployee_1 = require("./models/AddEmployee");
var add_employee_service_1 = require("./services/add-employee.service");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(addEmployeeService) {
        this.addEmployeeService = addEmployeeService;
        this.addemployeeObj = new AddEmployee_1.AddEmployee();
    }
    //Loading Department and Technology on compoment loading...
    AddEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addEmployeeService.getDepartment()
            .subscribe(function (result) { return _this.addemployeeObj.EmployeeDepartment = result; }, function (error) { return _this.addemployeeObj.Error = error; });
        this.addEmployeeService.getTechnology()
            .subscribe(function (result) { return _this.addemployeeObj.Technology = result; }, function (error) { return _this.addemployeeObj.Error = error; });
    };
    AddEmployeeComponent.prototype.onChange = function (value) {
        var _this = this;
        this.addEmployeeService.getDesignation(value)
            .subscribe(function (result) { return _this.addemployeeObj.EmployeeDesignation = result; }, function (error) { return _this.addemployeeObj.Error = error; });
    };
    //Postting the data to angular Service.
    AddEmployeeComponent.prototype.registerEmployee = function (form) {
        var _this = this;
        var data = JSON.stringify(form.value);
        console.log(data);
        alert(data);
        this.addEmployeeService.addEmployee(data)
            .subscribe(function (data) {
            _this.modalSucess.open();
        }, function (error) {
            _this.modalFail.open();
            console.log(error.json());
        });
        form.resetForm();
    };
    //Reset the form on click on reset.
    AddEmployeeComponent.prototype.clear = function (form) {
        form.resetForm();
    };
    __decorate([
        core_1.ViewChild("FailurModel"),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], AddEmployeeComponent.prototype, "modalFail", void 0);
    __decorate([
        core_1.ViewChild("SucessModel"),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], AddEmployeeComponent.prototype, "modalSucess", void 0);
    AddEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: './html/AddEmployee.html'
        }),
        __metadata("design:paramtypes", [add_employee_service_1.AddEmployeeService])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=addemployee.component.js.map