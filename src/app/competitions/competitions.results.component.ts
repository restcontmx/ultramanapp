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
    public errors : String = ""
    
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
                    this.errors = response.message
                } else {
                    this.competition = response.data
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
                this.registrations.forEach( r => r.original_rounds = r.rounds )
                this.calculateResults()
                if( this.competition.competition_type.value == 1 ) {
                    this.registrations.forEach( reg => {
                        // the cases of ultraman
                        // Calculate day 1
                        reg.total_day_1 = moment.utc( moment.duration( reg.totals[0] ).asMilliseconds() + moment.duration( reg.totals[1] ).asMilliseconds() ).format( "HH:mm:ss" )
                        // Calculate cycling
                        reg.total_cycling = moment.utc( moment.duration( reg.totals[1] ).asMilliseconds() + moment.duration( reg.totals[2] ).asMilliseconds() ).format( "HH:mm:ss" )
                    })
                    this.sortResults()
                }
            })
    }

    rangeOfStages( the_stages ) {
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
                if( this.competition.competition_type.value == 1 ){ 
                    let l_s = this.getLastStageBrother( stage )
                    if( l_s ) {
                        let last_rounds = reg.original_rounds.filter( round => round.stage == l_s._id && round.time != "00:00:00" )
                        let filtered_last_round = last_rounds[ last_rounds.length - 1 ]
                        if( filtered_last_round ) {
                            the_start_time = moment( filtered_last_round.time, 'HH:mm:ss' )
                        }
                    }
                }
                let filtered_rounds = reg.original_rounds.filter( round => round.stage == stage._id && round.time != "00:00:00" )
                let last_round = filtered_rounds[ filtered_rounds.length - 1 ]
                if( last_round ) {
                    reg.totals.push( moment.utc( moment( last_round.time, "HH:mm:ss" ).diff( the_start_time ) ).format( "HH:mm:ss" ) )
                } else {
                    reg.totals.push( "00:00:00" )
                }
            })
            reg.total = 0
            let start = true
            let start_day = 0
            reg.totals.forEach( total => {
                reg.total += moment.duration( total ).asMilliseconds()
                if( start ) {
                    start_day = moment.utc( reg.total ).days()
                    start = false
                }
            })
            let m = moment.utc( reg.total ).minutes() < 10 ? '0' + moment.utc( reg.total ).minutes() : moment.utc( reg.total ).minutes()
            let h = moment.utc( reg.total ).hours() < 10 ? '0' + moment.utc( reg.total ).hours() : '' + moment.utc( reg.total ).hours()
            let s = moment.utc( reg.total ).seconds() < 10 ? '0' + moment.utc( reg.total ).seconds() : moment.utc( reg.total ).seconds()
            let t_h = ( parseInt(h) + ( 24 * ( moment.utc( reg.total ).days() - start_day ) ) )
            h = t_h < 10 ? '0' + t_h : '' + t_h
            reg.total = `${h}:${m}:${s}`
        })
        this.calc_done = true
    }

    // sort the results by first place
    // @param none
    // @return none
    sortResults() : void {
        //this.registrations.sort( ( a, b ) => ( moment( b.total, "HH:mm:ss" ).diff( moment( a.total, "HH:mm:ss" ) ) ) )
        this.registrations = this.registrations.filter( r => r.total != "00:00:00" ).sort( ( a, b ) => {
            let vars_a = a.total.split( ":" )
            let vars_b = b.total.split( ":" )
            if( parseInt( vars_a[0] ) > parseInt( vars_b[0] ) ) {
                return 1
            } else if( parseInt( vars_a[0] ) == parseInt( vars_b[0] ) ){
                if( parseInt( vars_a[1] ) > parseInt( vars_b[1] ) ) {
                    return 1
                } else if( parseInt( vars_a[1] ) == parseInt( vars_b[1] ) ){ 
                    if( parseInt( vars_a[2] ) > parseInt( vars_b[2] ) ) {
                        return 1
                    } else if( parseInt( vars_a[2] ) == parseInt( vars_b[2] ) ) {
                        return 0
                    }
                }
            } return -1
        })
    }

    // Returns the last stage brother if there is one else null
    // @param stage object
    // @return stage object
    getLastStageBrother( stage ) {
        let rs = this.competition.stages.filter( s => s.start_time == stage.start_time )
        return rs.length == 2 && rs[rs.length-1]._id == stage._id ? rs[rs.length-2] : null
    }
}