import { Component, OnInit, OnDestroy } from '@angular/core'
import { CompetitionService } from './competition.service'
import { RegistrationService } from './registration.service'
import { StartTimeService } from '../start_times/starttime.service'
import { Router, ActivatedRoute } from '@angular/router'

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";

import * as moment from 'moment'

@Component({
    selector: 'competitions-stage',
    templateUrl: './competitions.stage.component.html'
})
export class CompetitionsStageComponent implements OnInit, OnDestroy {

    public title: String
    public registrations: Array<any>
    public competition
    public stage
    public rounds: Array<Number> = []
    public stage_id 
    public start_time

    // constructor
    // @params service: competition service
    // @returns none
    constructor(    private service:CompetitionService,
                    private registration_service:RegistrationService,
                    private start_time_service:StartTimeService,
                    private router:Router,
                    private activated_route:ActivatedRoute ) {
    }

    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    ngOnInit() : void {
        this.activated_route.params.subscribe( params => {
            let id = params[ 'id' ]
            this.stage_id = params[ 'stageId' ]
            this.getCompetition( id, this.stage_id )
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
    // @param stage_id : satage id
    // @returns none
    getCompetition( id, stage_id ) : void {
        this.service.detail( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( response.error ) {
                    console.log( response.message )
                } else {
                    this.competition = response.data
                    this.stage = this.competition.stages.filter( s => s._id == stage_id )[0]
                    this.title = `${this.stage.name} results`
                    for( let i = 0; i < this.stage.rounds; i++ ) {
                        this.rounds.push( i + 1 )
                    }
                    this.getStartTime( this.stage.start_time )
                }
            })
    }

    // This is because of shit on the backend
    // @param id
    // @returns none
    getStartTime( id ) : void {
        this.start_time_service.detail( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( response.error ) {
                    console.log( response.message )
                } else {
                    this.start_time = response.data
                    this.getAllRegistrations( )
                }
            })
    }

    // Gets all competitions from the service
    // @params none
    // @returns none
    getAllRegistrations( ) : void {
        this.registration_service.getAllByCompetitionId( this.competition._id )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    this.registrations = response.data
                    this.registrations.forEach( r => r.original_rounds = r.rounds )
                    this.calculateResults()
                } else {
                    console.log( "There was an error getting the results." )
                }
            })
    }

    // Saves all the registration rounds
    // @params none
    // @returns none
    saveRounds() : void {
        this.registration_service.saveRounds( this.registrations )
            .map( res => res.json() )
            .subscribe( response => {
                console.log( `This was saved on registration; Server says ${response.message}.` )
                this.getAllRegistrations()
            })
    }

    // calculate results
    // this will calculate the results total of each result
    // @params none
    // @returns none
    calculateResults() : void {
        var the_start_time = moment( this.start_time.date, 'HH:mm:ss' )
        this.registrations.forEach( r => {
            if( this.competition.competition_type.value == 1 ){ 
                let l_s = this.getLastStageBrother( this.stage )
                if( l_s ) {
                    let last_rounds = r.original_rounds.filter( round => round.stage == l_s._id && round.time != "00:00:00" )
                    let filtered_last_round = last_rounds[ last_rounds.length - 1 ]
                    if( filtered_last_round ) {
                        the_start_time = moment( filtered_last_round.time, 'HH:mm:ss' )
                    }
                }
            }
            r.rounds = r.original_rounds.filter( round => round.stage == this.stage_id )
            let filtered_rounds = r.rounds.filter( round => ( round.stage == this.stage_id && round.time != "00:00:00" ) )
            let last_round = filtered_rounds[filtered_rounds.length - 1]
            if( last_round ) {
                r.total = moment.utc( moment( last_round.time, "HH:mm:ss" ).diff( the_start_time ) ).format( "HH:mm:ss" )
            } else {
                r.total = "00:00:00"                        
            }
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