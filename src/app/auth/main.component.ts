import { Component, OnInit, OnDestroy } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { CompetitionService } from '../competitions/competition.service'

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";

import * as moment from 'moment'

@Component({
    selector : 'app-main',
    templateUrl : './main.component.html'
})
export class MainComponent implements OnInit, OnDestroy {

    public competitions : Array<any>
    public active_competitions : Array<any>
    public subscription : Subscription
    public timer
    public user_info

    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    constructor(    private auth_service:AuthService, 
                    private router:Router,
                    private competition_service:CompetitionService  ) {}
    
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {
        this.timer = TimerObservable.create( 2000, 1000 )
        this.getCompetitions()
        this.user_info = JSON.parse( localStorage.getItem( 'user_info' ) )
    }

    // Ng on destroy
    // When view ends
    // @params none
    // @returns none
    ngOnDestroy() : void {
        this.subscription.unsubscribe();
    }

    getCompetitions() : void {
        this.competition_service.getAll()
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    this.competitions = response.data
                    this.active_competitions = this.competitions.filter( c => c.isOn == true )
                    let now = moment()
                    this.active_competitions.forEach( ac => {
                        ac.start_times.forEach( s => {
                            s.difference = moment.duration( now.diff( moment( s.date, "HH:mm:ss" ) ) )
                            s.display = "00:00:00"
                        })
                    })

                    this.subscription = this.timer.subscribe(t => {
                        this.active_competitions.forEach( ac => {
                            ac.start_times.forEach( s => {
                                if( s.state ) {
                                    s.difference.add( 1, 'seconds' )
                                    s.display = s.difference.hours() + ':' + s.difference.minutes() + ':' + s.difference.seconds()
                                }
                            })
                        })
                    })
                }
            })
    }
}