import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { CategoryService } from './category.service'

@Component({
    selector : 'categories-detail',
    templateUrl : 'categories.detail.component.html'
})
export class CategoriesDetailComponent implements OnInit {
    
    public category
    public delete_name : String
    public errors : String
    public messages : String

    // Constructor function
    // @param service : competition service
    // @param router : router service
    // @param activated_route : Activated router service
    constructor(    private service:CategoryService,
                    private router:Router,
                    private activated_route:ActivatedRoute ) {
    }

    // Ng on init function of initialization
    // @params none
    // @returns none
    ngOnInit() : void {
        this.activated_route.params.subscribe( params => {
            let id = params['id']
            this.getCategory( id )
        })
    }

    // Get category
    // @params id : competition id string
    // @returns none
    getCategory( id ) : void {
        this.service.detail( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( response.error ) {
                    console.log( "There was an error getting the category" )
                } else {
                    this.category = response.data
                }
            })
    }

    update() : void {
        console.log( this.category )
        this.service.update( this.category )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    this.messages = "Object updated."
                } else {
                    this.errors = "There was an error updating the object."
                }
            })
    }

    delete() : void {
        if( this.delete_name == this.category.name ) {
            this.service.delete( this.category._id )
                .map( res => res.json() )
                .subscribe( response => {
                    if( !response.error ) {
                        this.router.navigateByUrl( '/categories' ) 
                    } else {
                        this.errors = "There was an error deleting the object."
                    }
                })
        } else {
            this.errors = "For deletion please tipe the right name."
        }
    }
}
