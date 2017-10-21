import { Component, OnInit, OnDestroy } from '@angular/core'
import { CompetitionService } from './competition.service'
import { RegistrationService } from './registration.service'
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";

import * as moment from 'moment'

@Component({
    selector: 'competitions-results',
    templateUrl: './competitions.results.component.html'
})
export class CompetitionsResultsComponent implements OnInit, OnDestroy {

    public title: String
    public registrations: Array<any>
    public competition
    public calc_done = false

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
                this.calculateResults()
                if( this.competition.competition_type.value == 1 ) {
                    this.registrations.forEach( reg => {
                        // the cases of ultraman
                        // Calculate day 1
                        reg.total_day_1 = moment.utc( moment.duration( reg.totals[0] ).asMilliseconds() + moment.duration( reg.totals[1] ).asMilliseconds() ).format( "HH:mm:ss" )
                        // Calculate cycling
                        reg.total_cycling = moment.utc( moment.duration( reg.totals[1] ).asMilliseconds() + moment.duration( reg.totals[2] ).asMilliseconds() ).format( "HH:mm:ss" )
                    })
                }
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

    // Calculate results
    // @params none
    // @returns none
    calculateResults() : void {
        this.registrations.forEach( reg => {
            reg.totals = []
            this.competition.stages.forEach( stage => {
                let start_time = this.competition.start_times.find( st => st._id == stage.start_time )
                let the_start_time = moment( start_time.date, "HH:mm:ss" )
                let filtered_rounds = reg.rounds.filter( round => round.stage == stage._id && round.time != "00:00:00" )
                let last_round = filtered_rounds[ filtered_rounds.length - 1 ]
                if( last_round ) {
                    reg.totals.push( moment.utc( moment( last_round.time, "HH:mm:ss" ).diff( the_start_time ) ).format( "HH:mm:ss" ) )
                } else {
                    reg.totals.push( "00:00:00" )
                }
            })
            //reg.total = reg.totals.reduce( ( a, b ) => ( moment.utc( moment.duration( a ).add( moment.duration( b ) ).asMilliseconds() ).format( "HH:mm:ss" ) ), "00:00:00" )
            reg.total = 0
            let start = true
            let start_day = 0
            reg.totals.forEach( total => {
                //reg.total = moment.utc( moment.duration( reg.total ).add( moment.duration( total ) ).asMilliseconds() ).format( "HH:mm:ss" )
                reg.total += moment.duration( total ).asMilliseconds()
                if( start ) {
                    start_day = moment.utc( reg.total ).days()
                    start = false
                }
            })
            let m = moment.utc( reg.total ).minutes() < 10 ? '0' + moment.utc( reg.total ).minutes() : moment.utc( reg.total ).minutes()
            let h = moment.utc( reg.total ).hours() < 10 ? '0' + moment.utc( reg.total ).hours() : '' + moment.utc( reg.total ).hours()
            let s = moment.utc( reg.total ).seconds() < 10 ? '0' + moment.utc( reg.total ).seconds() : moment.utc( reg.total ).seconds()
            console.log( `${( parseInt(h) * ( moment.utc( reg.total ).days() - start_day ))}:${m}:${s}` )
            reg.total = `${( parseInt(h) + ( 24 * ( moment.utc( reg.total ).days() - start_day ) ) )}:${m}:${s}`
        })
        this.calc_done = true
    }
}