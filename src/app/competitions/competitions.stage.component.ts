import { Component, OnInit, OnDestroy } from '@angular/core'
import { CompetitionService } from './competition.service'
import { RegistrationService } from './registration.service'
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";

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
    // constructor
    // @params service: competition service
    // @returns none
    constructor(    private service:CompetitionService,
                    private registration_service:RegistrationService,
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
                this.registrations.forEach( r => {
                    r.rounds = r.rounds.filter( round => round.stage == this.stage_id )
                })
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
            })
    }


}