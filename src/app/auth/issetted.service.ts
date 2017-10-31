import { Injectable } from '@angular/core'
import { CanActivate } from "@angular/router"
import { AuthService } from "./auth.service"
import { Router } from "@angular/router"
import { Observable } from 'rxjs/Rx';

@Injectable()
export class IsSetted implements CanActivate {

    // constructor function
    // @param auth_service: Authentication service
    // @param router: router service
    // @returns none
    constructor( private auth_service:AuthService, private router:Router ) {}
    
    // can activate
    // Verification of the login
    // @params none
    // @returns boolean
    canActivate() : Observable<boolean>  {
        return  this.auth_service.isMachinneSetted()
                    .map( res => {
                        if( res.json().error ) {
                            this.router.navigateByUrl( '/setup' )                            
                            return false
                        } else {
                            if( res.json().valid ) {
                                return true
                            } else {
                                this.router.navigateByUrl( '/setup' )
                                return false
                            }
                        }
                    })
    }
}