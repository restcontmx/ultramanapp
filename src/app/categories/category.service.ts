import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoryService {

    // Constructor function
    // @param http: http_service
    // @returns none
    constructor( private http_service:Http ) {}

    // Get all
    // Get all category
    // @params none
    // @returns Observable response
    getAll() : Observable<Response> {
        return this.http_service.get( '/api/category' )
    }

    // Add new category
    // @params data : a category
    // @returns Observable response
    add( data ) : Observable<Response> {
        return this.http_service.post( '/api/category', data )
    }

    // Update object
    // @params data : a category
    // @returns Observable response
    update( data ) : Observable<Response> {
        return this.http_service.put( `/api/category/${data._id}`, data )
    }

    // find by id category
    // @params id : number
    // @returns Observable response
    detail( id ) : Observable<Response> {
        return this.http_service.get( `/api/category/${id}` )
    }

    delete( id ) : Observable<Response> {
        return this.http_service.delete( `/api/category/${id}` )
    }
}