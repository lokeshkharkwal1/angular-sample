import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import { AddEmployee } from '../models/AddEmployee';


@Injectable()
export class AddEmployeeService {
    error: string;
    data: string;
    private headers = new Headers({ 'Content-Type': 'application/json' });

    //creating the WebApi Url for Employee
    private getEmployeeUrl = 'http://localhost:64612/Employee/GetEmployee';
    private getAllEmployeesUrl = 'http://localhost:64612/Employee/GetEmployees';
    private addEmployeeUrl = 'http://localhost:64612/Employee/AddEmployee';
    private getDepartmentUrl = 'http://localhost:64612/Employee/GetDepartment';
    private getDesignationUrl = 'http://localhost:64612/Employee/GetDesignation';
    private getTechnologyUrl = 'http://localhost:64612/Employee/GetTechnology';

    constructor(private http: Http) { }


    getTechnology() {
        const url = `${this.getTechnologyUrl}`;
        return this.http.get(url)
            .map((resposne: Response) => resposne.json());
    }

    getDepartment() {
        const url = `${this.getDepartmentUrl}`
        return this.http.get(url)
            .map((response: Response) => response.json());
    }

    getDesignation(id: number) {
        const url = `${this.getDesignationUrl}/${id}`;
        return this.http.get(url)
            .map((response: Response) => response.json());
    }

    addEmployee(empData: string) {

        const url = `${this.addEmployeeUrl}`
        return this.http
            .post(url, empData, { headers: this.headers });


    }

    getEmployee(id: number) {
        const url = `${this.getEmployeeUrl}/${id}`;
        return this.http.get(url)
            .map((response: Response) => response.json());
    }

    getAllEmployees() {
        const url = `${this.getAllEmployeesUrl}`;
        return this.http.get(url)
            .map((response: Response) => response.json());
    }

    private handleError(error: any): Promise<any> {
        alert("Error has been occured");
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
