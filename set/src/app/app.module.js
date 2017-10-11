"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var ng2_completer_1 = require("ng2-completer");
var app_component_1 = require("./app.component");
var error_component_1 = require("./error.component");
var account_component_1 = require("./account.component");
var router_1 = require("@angular/router");
var employee_componet_1 = require("./employee.componet");
var about_componet_1 = require("./about.componet");
var addemployee_component_1 = require("./addemployee.component");
var add_employee_service_1 = require("./services/add-employee.service");
var login_service_1 = require("./services/login.service");
var test_component_1 = require("./test.component");
var appRoutes = [
    { path: '', redirectTo: '/About', pathMatch: 'full' },
    { path: 'Employee', component: employee_componet_1.EmployeeComponent },
    { path: 'AddEmployee', component: addemployee_component_1.AddEmployeeComponent },
    { path: 'About', component: about_componet_1.AboutComponent },
    { path: 'Account', component: account_component_1.AccountComponent },
    { path: '**', component: error_component_1.ErrorComponent },
    { path: 'Test', component: test_component_1.TestComponent, outlet: 'testAux' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule, ng2_bs3_modal_1.Ng2Bs3ModalModule, ng2_completer_1.Ng2CompleterModule],
            declarations: [app_component_1.AppComponent, error_component_1.ErrorComponent, employee_componet_1.EmployeeComponent, about_componet_1.AboutComponent, addemployee_component_1.AddEmployeeComponent, account_component_1.AccountComponent, test_component_1.TestComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [add_employee_service_1.AddEmployeeService, login_service_1.LoginService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map