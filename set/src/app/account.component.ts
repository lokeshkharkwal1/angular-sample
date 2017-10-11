import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { LoginService } from './services/login.service';

import { Register } from './models/Register';
import { Login } from './models/Login';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: './html/Account.html'
})


export class AccountComponent {

    //Constructor is used whenever we need to inject DI and proper initilization of fields in the class and subclass
    constructor(private loginService: LoginService) { }
    registerObj: Register = new Register();
    loginObj: Login = new Login();

    @ViewChild("FailurModel")
    modalFail: ModalComponent;
    @ViewChild("SucessModel")
    modalSucess: ModalComponent;

    registerUser(form: NgForm) {
        var userData = JSON.stringify(form.value);
        this.loginService.registerUser(userData)
            .subscribe((data) => {
                this.modalSucess.open();
            }, (error) => {
                this.registerObj.registerErrorResponseMessage = error.json().ModelState.ErrorMessage[0],
                    this.modalFail.open();
            });
        form.resetForm();
    }

    loginUser(form: NgForm) {

        var userData = JSON.stringify(form.value);
        alert('Called');
        console.log(userData);
        var loginData = this.loginService.userLogin(userData);
        console.log(loginData);
        alert(loginData);
        this.loginService.userLogin(userData).
            subscribe(data => {
                this.modalSucess.open();
            }, error => {
                this.modalFail.open();
                alert(error);
            });
    }

}