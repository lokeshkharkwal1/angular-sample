import { Component, OnInit, TemplateRef } from '@angular/core';
import { Employee } from './models/Employee';



import { AddEmployeeService } from './services/add-employee.service';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: './html/Employee.html'
})

export class EmployeeComponent implements OnInit{
    
    //Constructor is used whenever we need to inject DI and proper initilization of fields in the class and subclass
    constructor(private employeeService: AddEmployeeService) {
 
    }
    employeeListObj: Employee = new Employee();
    
    //ngOnInit is called after the calling of Class Constructor is completed its is used where we need to get the component ready on page load.
    ngOnInit() {

        //getting all employee data
        this.employeeService.getAllEmployees().subscribe((data) => this.employeeListObj.EmpDataList = data, (error) => this.employeeListObj.Error = error);

    }
}
