import { Component, OnInit, OnDestroy } from '@angular/core'
import { CompetitionService } from './competition.service'

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";

import * as moment from 'moment'

@Component({
    selector: 'competitions-list',
    templateUrl: './competitions.list.component.html'
})
export class CompetitionsListComponent implements OnInit, OnDestroy {

    public tick : string
    public title = "Competitions"
    public competitions = []
    public subscription : Subscription

    // constructor
    // @params service: competition service
    // @returns none
    constructor( private service : CompetitionService ) {}

    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    ngOnInit() : void {
        
        this.getAllCompetitions()
        
        let now = moment()
        let timer = TimerObservable.create( 2000, 1000 )
        let difference = moment.duration( now.diff( moment( "10/08/2017 13:00:00" ) ) )
        let seconds = difference.asSeconds()

        this.subscription = timer.subscribe(t => {
            difference.add( 1, 'seconds' )
            this.tick = difference.hours() + ':' + difference.minutes() + ':' + difference.seconds()
        })
    }

    // Ng on destroy
    // When view ends
    // @params none
    // @returns none
    ngOnDestroy() : void {
        this.subscription.unsubscribe();
    }

    // Gets all competitions from the service
    // @params none
    // @returns none
    getAllCompetitions() : void {
        this.service.getAll()
            .map( res => res.json() )
            .subscribe( ( response ) => {
                this.competitions = response.data
            })
    }

    // Delete competition
    // @params id
    // @returns none
    delete( id ) : void {
        this.service.delete( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    console.log( "Competition deleted" )
                    this.getAllCompetitions()
                } else {
                    console.log( `There was an error deleting ${response.message}` )
                }
            })
    }
}