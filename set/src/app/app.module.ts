import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Ng2CompleterModule } from "ng2-completer";


import { AppComponent } from './app.component';
import { ErrorComponent } from './error.component';
import { AccountComponent } from './account.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.componet';
import { AboutComponent } from './about.componet';
import { AddEmployeeComponent } from './addemployee.component';
import { AddEmployeeService } from './services/add-employee.service';
import { LoginService } from './services/login.service';

import { TestComponent } from './test.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/About', pathMatch: 'full' },
    { path: 'Employee', component: EmployeeComponent },
    { path: 'AddEmployee', component: AddEmployeeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Account', component: AccountComponent },
    { path: '**', component: ErrorComponent },
    { path: 'Test', component: TestComponent, outlet:'testAux'}
];


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule, Ng2Bs3ModalModule, Ng2CompleterModule],
    declarations: [AppComponent, ErrorComponent, EmployeeComponent, AboutComponent, AddEmployeeComponent, AccountComponent, TestComponent],
    bootstrap: [AppComponent],
    providers: [AddEmployeeService, LoginService]
})
export class AppModule { }
