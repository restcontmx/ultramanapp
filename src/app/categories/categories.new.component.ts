import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { CategoryService } from './category.service'

import { NgForm } from '@angular/forms'

import { Subscription } from "rxjs"
import { TimerObservable } from "rxjs/observable/TimerObservable"

@Component({
    selector: 'categories-new',
    templateUrl: './categories.new.component.html'
})
export class CategoriesNewComponent implements OnInit, OnDestroy {

    tick : string
    title = "New Category"
    competition_types = []
    subscription : Subscription
    errors = []
    messages = []

    // constructor
    // @params service: categories service
    // @returns none
    constructor(    private service : CategoryService,
                    private router : Router ) {}

    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    ngOnInit() : void {
    }

    // Ng on destroy
    // When view ends
    // @params none
    // @returns none
    ngOnDestroy() : void {
        // Code when view ends
    }

    // Add new competition
    // Add new competition with form
    // @params competitionForm : NgForm
    // @returns none
    add( categoryForm : NgForm ) : void {
        if( categoryForm.valid ) {
            this.service.add( categoryForm.value )
                        .map( res => res.json() )
                        .subscribe( ( response ) => {
                            if( response.error ) {
                                console.log( "There was an error adding model" )
                                console.log( response.message )
                            } else {
                                console.log( response.data )
                                this.router.navigateByUrl( 'categories' )
                            }
                        })
        }
    }

}