export class Login {

    public userLoginEmail: string;
    public userLoginPassword: string;

    public grant_type: string = "password";

    public accessToken: string;
    public refreshToken: string;

    public loginResponseMessage: string;
}