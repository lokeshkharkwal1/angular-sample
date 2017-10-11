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
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var login_service_1 = require("./services/login.service");
var Register_1 = require("./models/Register");
var Login_1 = require("./models/Login");
var AccountComponent = /** @class */ (function () {
    //Constructor is used whenever we need to inject DI and proper initilization of fields in the class and subclass
    function AccountComponent(loginService) {
        this.loginService = loginService;
        this.registerObj = new Register_1.Register();
        this.loginObj = new Login_1.Login();
    }
    AccountComponent.prototype.registerUser = function (form) {
        var _this = this;
        var userData = JSON.stringify(form.value);
        this.loginService.registerUser(userData)
            .subscribe(function (data) {
            _this.modalSucess.open();
        }, function (error) {
            _this.registerObj.registerErrorResponseMessage = error.json().ModelState.ErrorMessage[0],
                _this.modalFail.open();
        });
        form.resetForm();
    };
    AccountComponent.prototype.loginUser = function (form) {
        var _this = this;
        var userData = JSON.stringify(form.value);
        alert('Called');
        console.log(userData);
        var loginData = this.loginService.userLogin(userData);
        console.log(loginData);
        alert(loginData);
        this.loginService.userLogin(userData).
            subscribe(function (data) {
            _this.modalSucess.open();
        }, function (error) {
            _this.modalFail.open();
            alert(error);
        });
    };
    __decorate([
        core_1.ViewChild("FailurModel"),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], AccountComponent.prototype, "modalFail", void 0);
    __decorate([
        core_1.ViewChild("SucessModel"),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], AccountComponent.prototype, "modalSucess", void 0);
    AccountComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: './html/Account.html'
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map