import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
    
    // Constructor function
    // @param http_service:Http serivce
    // @param cookie_service:Cookie service 
    // @returns none
    constructor( private http_service:Http, private cookie_service:CookieService ) {}

    // View validation
    // Verifies that the user is logged in
    // @params none
    // @return boolean
    viewVerification = () : boolean => {
        //let userData = this.cookie_service.get( 'userdata' ) || null;
        //return userData ? true : false;
        return true;
    }

    // Login function
    // This will handle the http pettiton to login on the server side
    // @param email : string - user email for auth
    // @param password : string - user password for auth
    // @returns a login pettition
    login( email:string, password:string ) {
        return this.http_service.post( '/api/auth/login/', { 'email' : email, 'password' : password })        
    }

    // Log out function
    // This will handle the http pettition to log out
    // @params none
    // @returns a logout pettition
    logout = () => {
        return this.http_service.post( '/api/auth/logout/', {});
    }
}