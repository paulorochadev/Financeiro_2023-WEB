import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment";

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor(private httpClient: HttpClient ) {

    }

    private readonly baseUrl = environment["endPoint"];

    login(email: string, password: string) {
        return this.httpClient.post<any>(`${this.baseUrl}/CreateToken`, {
            email: email,
            password: password
        })
    }
}