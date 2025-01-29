import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginDto, UserDto } from "../dto/login-dto";

const ENDPOINT = `https://localhost:7132/api/`;

@Injectable({
    providedIn: 'root'
})
export class UserHttpService {

    constructor(private http: HttpClient) {
    }

    getByUserAndPassword(request: LoginDto): Observable<boolean> {
        const url = `${ENDPOINT}User/GetByUserAndPassword`;
        return this.http.post<boolean>(url, request);
    }

    getAll(): Observable<UserDto[]> {
        const url = `${ENDPOINT}User`;
        return this.http.get<UserDto[]>(url);
    }
}