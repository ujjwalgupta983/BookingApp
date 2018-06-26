import { AlertService } from './alert.service';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthenticationService {
    readonly root_url="http://localhost:57055";
    constructor(private http: HttpClient,
        private userService: UserService,
        private alertService: AlertService) { }

    login(email: string, passcode: string) {
        const headers = new HttpHeaders().set('content-type', 'application/json'); 
        return this.http.post<any>(this.root_url+'/api/Owner', { email: email, passcode: passcode},{headers})
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.alertService.success('Login successful', true);
                }
                else{
                    this.alertService.error("Failed");
                }
                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}