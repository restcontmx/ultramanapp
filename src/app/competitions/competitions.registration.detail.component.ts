import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { RegistrationService } from './registration.service'

@Component({
    selector : 'competitions-registration-detail',
    templateUrl : 'competitions.registration.detail.component.html'
})
export class RegistrationDetailComponent implements OnInit {
    
    public register
    public delete_name : String
    public errors : String
    public messages : String

    // Constructor function
    // @param service : competition service
    // @param router : router service
    // @param activated_route : Activated router service
    constructor(    private service:RegistrationService,
                    private router:Router,
                    private activated_route:ActivatedRoute ) {
    }

    // Ng on init function of initialization
    // @params none
    // @returns none
    ngOnInit() : void {
        this.activated_route.params.subscribe( params => {
            let id = params['id']
            this.getRegister( id )
        })
    }

    // Get register
    // @params id : competition id string
    // @returns none
    getRegister( id ) : void {
        this.service.detail( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( response.error ) {
                    this.errors = "There was an error getting the register"
                } else {
                    this.register = response.data
                }
            })
    }

    delete() : void {
        if( this.delete_name == ( this.register.first_name + ' ' + this.register.last_name ) ) {
            this.service.delete( this.register._id )
                .map( res => res.json() )
                .subscribe( response => {
                    if( !response.error ) {
                        this.router.navigateByUrl( '/competitions/detail/' + this.register.competition._id ) 
                    } else {
                        this.errors = "There was an error deleting the object."
                    }
                })
        } else {
            this.errors = "For deletion please tipe the right name."
        }
    }
}
