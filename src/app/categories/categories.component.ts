
import { Component, OnInit } from '@angular/core'
import { CategoryService } from './category.service'

@Component({
    selector: 'categories',
    templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {
    
    title = "Categories";

    // constructor
    // @params service: competition service
    // @returns none
    constructor( private service : CategoryService ) {}

    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    ngOnInit() : void { }
}