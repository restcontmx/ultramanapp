
import { Component } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'

@Component({
    selector : 'ultra-sidebar',
    templateUrl : './sidebar.component.html'
})
export class SideBarComponent {

    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    constructor( private auth_service:AuthService, private router:Router ) {}

    // Log out funtion
    // Will logout and clean the cookie on the serve side of the app
    // @params none
    // @returns none
    logout = ( log:NgForm ) => {
        /** 
        this.auth_service.logout()
            .map( res => res.json() )
            .subscribe( ( response ) => {
                console.log( "Log out succesful" )
            })**/
        if( log.valid ) {
            console.log( log.value )
            this.router.navigateByUrl( '/login' ) 
        }            
    }
}