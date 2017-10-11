import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';

import { Headers, RequestOptions } from '@angular/http';

import { About } from './models/About';
import { AddEmployee } from './models/AddEmployee';
import { SearchCriteria } from './models/SearchCriteria';
import { AddEmployeeService } from './services/add-employee.service';

import { AccountComponent } from './account.component';


@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: './html/About.html'
})

export class AboutComponent {


    public searchStr: string;
    public captain: string;
    public dataService: CompleterData;
    public data: any;
    public remoteData: any;


    public findData: any;

    private getEmployeesByName = 'http://localhost:64612/Employee/GetEmployeesByName'

    constructor(private employeeService: AddEmployeeService, private completerService: CompleterService) { }



    aboutObj: About = new About();
    configurationObj: SearchCriteria = new SearchCriteria();

    getEmployee(id: number) {
        this.aboutObj.ErrorMessage = undefined;
        this.employeeService.getEmployee(id)
            .subscribe((resEmpData) => this.aboutObj.EmpData = resEmpData, (error) => this.aboutObj.ErrorMessage = error);
    }

    /**
     *
     * @param item
     */
    onSelected(item: CompleterItem) {
        this.aboutObj.EmpData = item.originalObject;
    }


    /**
    checking the behavoiur of checkbox and setting the url as the param passing.
     * /
     * @param name
     */
    checkBoxChecked(name: string) {

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

            const url = `${this.getEmployeesByName}?${name}=`
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

            const url = `${this.getEmployeesByName}?${name}=`
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

            const url = `${this.getEmployeesByName}?${name}=`
            this.remoteData = this.completerService.remote(url, 'DesginationName', 'EmployeeName');

        }
    }

}