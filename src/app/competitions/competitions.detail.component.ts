import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { CompetitionService } from './competition.service'
import { RegistrationService } from './registration.service'

@Component({
    selector : 'competitions-detail',
    templateUrl : 'competitions.detail.component.html'
})
export class CompetitionsDetailComponent implements OnInit {
    
    competition
    registrations

    // Constructor function
    // @param service : competition service
    // @param router : router service
    // @param activated_route : Activated router service
    constructor(    private service:CompetitionService,
                    private registration_service:RegistrationService,
                    private router:Router,
                    private activated_route:ActivatedRoute ) {
    }

    // Ng on init function of initialization
    // @params none
    // @returns none
    ngOnInit() : void {
        this.activated_route.params.subscribe( params => {
            let id = params['id']
            this.getCompetition( id )
            this.getRegistrationsByCompetitionId( id )
        })
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
                    if( this.competition.start_times.find( element => element.state == true ) ) {
                        this.activeAllStartTimes()
                    } else {
                        this.competition.start_times.forEach(element => element.active = true );
                    }
                }
            })
    }

    getRegistrationsByCompetitionId( id ) : void {
        this.registration_service.getAllByCompetitionId( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( response.error ) {
                    console.log( "There was an error getting the registrations" )
                } else {
                    this.registrations = response.data
                }
            })
    }

    // Start function
    // this will set the state of the day to on 
    // @param start time
    // @return none
    start( start_time ) : void {
        start_time.state = true
        this.competition.isOn = true
        this.service.startTimesUpdate( this.competition )
            .map( res => res.json() )
            .subscribe( response => {
                if( response.error ) {
                    console.log( response.message )
                } else {
                    this.activeStartTime( start_time )
                    console.log( "Updated" )
                }
            })
    } 

    // quick start function
    // This will set the date just in the moment it was pressed
    // @params start time
    // @return none
    quickStart( start_time ) : void {
        let now_date = new Date()
        start_time.date = now_date.getHours() + ":" + now_date.getMinutes() + ":" + now_date.getSeconds()
        start_time.state = true
        this.competition.isOn = true
        this.service.startTimesUpdate( this.competition )
            .map( res => res.json() )
            .subscribe( response => {
                if( response.error ) {
                    console.log( response.message )
                } else {
                    this.activeStartTime( start_time )
                    console.log( "Updated" )
                }
            })
    }

    // Stop start time
    // @param start_time 
    // @returns none
    stopSartTime( start_time ) : void {
        start_time.state = false
        this.competition.isOn = false
        this.service.startTimesUpdate( this.competition )
            .map( res => res.json() )
            .subscribe( response => {
                if( response.error ) {
                    console.log( response.message )
                } else {
                    this.competition.start_times.forEach(element => element.active = true );
                    console.log( "Updated" )
                }
            })
    }

    // Active start time and disable the others
    // @param start_time 
    // @returns none
    activeStartTime( start_time ) : void {
        start_time.active = true
        this.competition.start_times.forEach(element => {
            if( element._id != start_time._id ) {
                element.active = false
            }    
        });
    }
    
    // Active all start times
    // @params none
    // @returns none
    activeAllStartTimes( ) : void {
        this.competition.start_times.forEach(element => {
            element.active = element.state
        });
    }
}
