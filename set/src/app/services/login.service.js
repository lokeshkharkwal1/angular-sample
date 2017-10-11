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
require("rxjs/add/operator/do");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.loginHeader = new http_1.Headers({ 'Content-Type': "application/json; charset=utf-8" });
        this._registerUserUrl = 'http://localhost:58924/api/Account/Register';
        this._loginUrl = '/Token';
        this._login = 'http://localhost:58924/api/Account/ExternalLogin';
    }
    LoginService.prototype.registerUser = function (userData) {
        var url = "" + this._registerUserUrl;
        return this.http.post(url, userData, { headers: this.headers }).map(function (response) { return response.json(); }).do(function (data) { return console.log(data); }, function (error) { return console.log(error.json()); });
    };
    LoginService.prototype.userLogin = function (loginData) {
        var url = "" + this._login;
        var response = this.http.post(url, loginData, { headers: this.loginHeader });
        return response;
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map