import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { CompetitionService } from './competition.service'
import { CategoryService } from '../categories/category.service'
import { RegistrationService } from './registration.service'

@Component({
    selector : 'competitions-registration',
    templateUrl : 'competitions.registration.component.html'
})
export class CompetitionsRegistrationComponent implements OnInit { 

    public competition : any
    public categories : Array<any>
    public categories_cb : Array<any>
    public sexes : Array<any>
    public registration = {
        sex : { id: 0, value: 0, name: 'None' },
        age : 0,
        category : undefined,
        first_name : "",
        last_name : "",
        bio : "",
        team : "",
        competition : 0,
        competitor_number : 0
    }

    // Constructor function
    // @param service : competition service
    // @param router : router service
    // @param activated_route : Activated router service
    constructor(    private service:CompetitionService,
                    private registration_service:RegistrationService,
                    private category_service:CategoryService,
                    private router:Router,
                    private activated_route:ActivatedRoute  ) {
    }

    // Ng on init function of initialization
    // @params none
    // @returns none
    ngOnInit() : void {
        this.activated_route.params.subscribe( params => {
            let id = params['id']
            this.getCompetition( id )
        })
        this.setSexes()
        this.getAllCategories() 
    }

    // Register on the db the register model
    // @param none
    // @returns none
    register() : void {
        if( this.validateRegister( this.registration ) ) {
            this.registration.competition = this.competition
            this.registration_service.add( this.registration )
                .map( res => res.json() )
                .subscribe( response => {
                    if( response.error ) {
                        console.log( response.message )
                    } else {
                        console.log( response.data )
                        this.router.navigateByUrl( '/competitions' )
                    }
                })
        }
    }

    // Get competition
    // @params id : competition id string
    // @returns none
    getCompetition( id ) : void {
        this.service.detail( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( response.error ) {
                    console.log( "There was an error getting the competition" )
                } else {
                    this.competition = response.data
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