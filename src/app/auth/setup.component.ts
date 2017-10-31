
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector : 'app-setup',
    templateUrl : './setup.component.html',
    styleUrls : [ 
        './setup.component.css'
    ]
})
// Login component is the main login view
export class SetupComponent {
    
    public errors : String = "" 
    public messages : String = "" 

    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    constructor( private auth_service:AuthService, private router:Router ) {}

    // Register function
    // Register the form on the database
    // @params none
    // @returns void
    register = (reg: NgForm ) => {
        if( reg.valid && reg.value.password == reg.value.password2 ) {
            let data = {
                user : {
                    last_name : reg.value.last_name,
                    first_name : reg.value.first_name,
                    email : reg.value.email,
                    password : reg.value.password,
                    username : reg.value.email
                },
                mac_add : "",
                key : reg.value.key
            }
            this.auth_service.register( data )
                .map( res => res.json() )
                .subscribe( response => {
                    if( !response.error ) {
                        if( response.code == 200 ) {
                            this.router.navigateByUrl( '/login' )
                        } else if( response.code == 201 ){
                            this.router.navigateByUrl( '/login' )
                        }
                    } else {
                        this.errors = response.message
                    }
                })
        } else {
            this.errors = "Please verify the information is correct!"
        }
    }
}