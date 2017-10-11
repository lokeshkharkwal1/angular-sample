import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AddEmployee } from './models/AddEmployee';
import { NgForm } from '@angular/forms';
import { AddEmployeeService } from './services/add-employee.service';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: './html/AddEmployee.html'

})

export class AddEmployeeComponent implements OnInit {

    constructor(private addEmployeeService: AddEmployeeService) { }


    @ViewChild("FailurModel")
    modalFail: ModalComponent;
    @ViewChild("SucessModel")
    modalSucess: ModalComponent;

    addemployeeObj: AddEmployee = new AddEmployee();

    //Loading Department and Technology on compoment loading...
    ngOnInit() {
        this.addEmployeeService.getDepartment()
            .subscribe((result) => this.addemployeeObj.EmployeeDepartment = result, (error) => this.addemployeeObj.Error = error);

        this.addEmployeeService.getTechnology()
            .subscribe((result) => this.addemployeeObj.Technology = result, (error) => this.addemployeeObj.Error = error);
    }

    onChange(value: number) {
        this.addEmployeeService.getDesignation(value)
            .subscribe((result) => this.addemployeeObj.EmployeeDesignation = result, (error) => this.addemployeeObj.Error = error);
    }


    //Postting the data to angular Service.
    registerEmployee(form: NgForm) {

        var data = JSON.stringify(form.value);
        console.log(data);
        alert(data);
        this.addEmployeeService.addEmployee(data)
            .subscribe(data => {
                this.modalSucess.open();
            }, error => {
                this.modalFail.open();
                console.log(error.json());
            });
        form.resetForm();
    }

    //Reset the form on click on reset.
    clear(form: NgForm) {
        form.resetForm();
    }
}