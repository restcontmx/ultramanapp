import { Component, OnInit, OnDestroy } from '@angular/core'
import { CategoryService } from './category.service'

@Component({
    selector: 'categories-list',
    templateUrl: './categories.list.component.html'
})
export class CategoriesListComponent implements OnInit, OnDestroy {

    tick : string
    title = "Categories"
    categories = []

    // constructor
    // @params service: category service
    // @returns none
    constructor( private service : CategoryService ) {}

    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    ngOnInit() : void {
        this.getAllCategories()
    }

    // Ng on destroy
    // When view ends
    // @params none
    // @returns none
    ngOnDestroy() : void {
        // when view destroy
    }

    // Gets all categories from the service
    // @params none
    // @returns none
    getAllCategories() : void {
        this.service.getAll()
            .map( res => res.json() )
            .subscribe( ( response ) => {
                console.log( response )
                this.categories = response.data
            })
    }
    
}