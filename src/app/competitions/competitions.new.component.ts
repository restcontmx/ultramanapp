import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { CompetitionService } from './competition.service'
import { CompetitionTypeService } from '../competition_types/competition_types.service'

import { NgForm } from '@angular/forms'

import { Subscription } from "rxjs"
import { TimerObservable } from "rxjs/observable/TimerObservable"

import * as moment from 'moment'

@Component({
    selector: 'competitions-new',
    templateUrl: './competitions.new.component.html'
})
export class CompetitionsNewComponent implements OnInit, OnDestroy {

    tick : string
    title = "New Competition"
    competition_types = []
    subscription : Subscription
    errors = []
    messages = []

    // constructor
    // @params service: competition service
    // @returns none
    constructor(    private service : CompetitionService,
                    private competition_type_service : CompetitionTypeService,
                    private router : Router ) {}

    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    ngOnInit() : void {
        // Code when view starts
        this.getAllCompetitionTypes()
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
    add( competitionForm : NgForm ) : void {
        if( competitionForm.valid ) {
            this.service.add( competitionForm.value )
                        .map( res => res.json() )
                        .subscribe( ( response ) => {
                            if( response.error ) {
                                console.log( "There was an error adding model" )
                                console.log( response.message )
                            } else {
                                this.router.navigateByUrl( 'competitions' )
                            }
                        })
        }
    }

    // Get all competition types
    // @params none 
    // @returns none 
    getAllCompetitionTypes() : void {
        this.competition_type_service.getAll()
            .map( res => res.json() )
            .subscribe( ( response ) => {
                if( response.error ) {
                    console.log( "There was an error getting comp types" )
                    console.log( response.message )
                } else {
                    this.competition_types = response.data
                }
            })
    }
}