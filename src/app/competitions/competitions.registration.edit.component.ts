import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { CategoryService } from '../categories/category.service'
import { RegistrationService } from './registration.service'

@Component({
    selector : 'registration-edit',
    templateUrl : 'competitions.registration.edit.component.html'
})
export class RegistrationEditComponent implements OnInit { 

    public competition : any
    public categories : Array<any>
    public categories_cb : Array<any>
    public sexes : Array<any>    
    public errors : String
    public messages : String
    public registration

    // Constructor function
    // @param service : competition service
    // @param router : router service
    // @param activated_route : Activated router service
    constructor(    private service:RegistrationService,
                    private category_service:CategoryService,
                    private router:Router,
                    private activated_route:ActivatedRoute ) {
    }

    // Ng on init function of initialization
    // @params none
    // @returns none
    ngOnInit() : void {
        this.activated_route.params.subscribe( params => {
            let id = params['id']
            this.getRegistration( id )
        })
        this.setSexes()
        this.getAllCategories()
    }

    // update registration
    // updates with the normal values the registration
    // @params none
    // @returns none
    update() : void {
        let reg = {
            id : this.registration._id,
            first_name : this.registration.first_name,
            last_name : this.registration.last_name,
            team : this.registration.team,
            bio : this.registration.bio,
            competitor_number : this.registration.competitor_number
        }
        this.service.update( reg )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    this.router.navigateByUrl( `/competitions/detail/${this.registration.competition._id}` )
                } else {
                    this.errors = response.message
                }
            })
    }

    disqualified() : void {
        let reg = {
            id : this.registration._id,
            disqualified : true
        }
        this.service.update( reg )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    this.router.navigateByUrl( `/competitions/detail/${this.registration.competition._id}` )
                } else {
                    this.errors = response.message
                }
            })
    }

    // Get registration 
    // Get the registration by id
    // @param id : the register id
    // @returns none
    getRegistration( id ) : void {
        this.service.detail( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    this.registration = response.data
                }
            })
    }

    // Get all the categories
    // @params none
    // @returns none
    getAllCategories() : void {
        this.category_service.getAll()
            .map( res => res.json() )
            .subscribe( response => {
                if( response.error ) {
                    console.log( response.message )
                } else {
                    this.categories = response.data
                }
            })
    }

    // Set sexes, inits the sexes array
    // @params none
    // @returns none
    setSexes() : void {
        this.sexes = [
            { id: 1, value: 1, name: 'Male' },
            { id: 2, value: 2, name: 'Female' }
        ]
    }

    // Category select trigger
    // This is when the sex or age changes of value then the categories get filtered 
    // @params none
    // @returns none
    selectCategoryTriggerChange() : void {
        if( this.registration.age > 0 && this.registration.sex.id > 0 ) {
            this.categories_cb = this.categories.filter( c => c.age_1 <= this.registration.age && c.age_2 >= this.registration.age && ( this.registration.sex.value - 1 ) == c.sex )            
        } else {
            this.categories_cb = []
        }
    }

    // Validates register form
    // This is because am a shitty programer
    // @params register : a register 
    // @returns Boolean - if valid
    validateRegister( register ) : Boolean {
        return (    register.age > 0 
                    && register.sex.id > 0
                    && register.first_name != ""
                    && register.last_name != ""
                    && register.category )
    }
}