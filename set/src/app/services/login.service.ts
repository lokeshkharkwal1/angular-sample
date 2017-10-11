import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class LoginService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private loginHeader = new Headers({ 'Content-Type': "application/json; charset=utf-8" });

    private _registerUserUrl = 'http://localhost:58924/api/Account/Register';
    private _loginUrl = '/Token';

    private _login = 'http://localhost:58924/api/Account/ExternalLogin';

    public error: string;
    constructor(private http: Http) { }

    registerUser(userData: string) {
        const url = `${this._registerUserUrl}`;
        return this.http.post(url, userData, { headers: this.headers }).map((response : Response) => response.json()).do((data) => console.log(data),(error) => console.log(error.json()));
    }

    userLogin(loginData: string) {
        const url = `${this._login}`;
        var response = this.http.post(url, loginData, { headers: this.loginHeader });
        return response;
    }

}