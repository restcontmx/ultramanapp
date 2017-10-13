
import { Component, OnInit } from '@angular/core'
import { CompetitionService } from './competition.service'

@Component({
    selector: 'competitions',
    templateUrl: './competitions.component.html'
})
export class CompetitionsComponent implements OnInit {
    
    title = "Competitions";

    // constructor
    // @params service: competition service
    // @returns none
    constructor( private service : CompetitionService ) {}

    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    ngOnInit() : void { }
}