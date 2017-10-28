
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : [ 
        './login.component.css'
    ]
})
// Login component is the main login view
export class LoginComponent {
    
    public errors : String = "" 

    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    constructor( private auth_service:AuthService, private router:Router ) {}

    // Login function
    // This uses the authentication service to validate the user and password
    // @params none
    // @returns void
    login = (log: NgForm ) => {
        if( log.valid ) {
            this.auth_service.login( log.value.email, log.value.password )
                .map( res => res.json() )
                .subscribe( ( response ) => {
                    if( !response.error ) {
                        localStorage.setItem( "user_info", response.data )
                        this.router.navigateByUrl( '/' );
                    } else {
                        this.errors = response.message
                    }
                });
        }
    }
}