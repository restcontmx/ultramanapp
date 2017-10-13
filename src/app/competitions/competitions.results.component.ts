import { Component, OnInit, OnDestroy } from '@angular/core'
import { CompetitionService } from './competition.service'
import { RegistrationService } from './registration.service'
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";

@Component({
    selector: 'competitions-results',
    templateUrl: './competitions.results.component.html'
})
export class CompetitionsResultsComponent implements OnInit, OnDestroy {

    public title: String
    public registrations: Array<any>
    public competition

    // constructor
    // @params service: competition service
    // @returns none
    constructor(    private service:CompetitionService,
                    private registration_service:RegistrationService,
                    private router:Router,
                    private activated_route:ActivatedRoute ) {
        this.title = "Results"
    }

    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    ngOnInit() : void {
        this.activated_route.params.subscribe( params => {
            let id = params[ 'id' ]
            this.getCompetition( id )
            this.getAllRegistrations( id )           
        })
    }

    // Ng on destroy
    // When view ends
    // @params none
    // @returns none
    ngOnDestroy() : void { }

    // Get competition
    // Get competition by id
    // @param id : competitors id
    // @returns none
    getCompetition( id ) : void {
        this.service.detail( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( response.error ) {
                    console.log( response.message )
                } else {
                    this.competition = response.data
                    console.log( this.competition )
                }
            })
    }

    // Gets all competitions from the service
    // @params none
    // @returns none
    getAllRegistrations( id ) : void {
        this.registration_service.getAllByCompetitionId( id )
            .map( res => res.json() )
            .subscribe( ( response ) => {
                this.registrations = response.data
            })
    }

    rangeOfStages( the_stages ) {
        console.log( the_stages )
        let numbers = []
        the_stages.forEach(s => {
            for( let i = 0; i < s.rounds; i++ ) {
                numbers.push( i + 1 )
            }
        });
        return numbers
    }
}